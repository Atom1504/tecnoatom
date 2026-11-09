import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";
import { contactServiceOptions } from "@/data/services";

const DEFAULT_RECIPIENT = "contacto@tecnoatom.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DELIVERY_TIMEOUT_MS = 10_000;

const contactRequestSchema = z.object({
  nombre: z.string().trim().min(2).max(120),
  empresa: z.string().trim().max(160).default(""),
  email: z.string().trim().email().max(254),
  telefono: z.string().trim().max(40).default(""),
  servicio: z.string().max(60).default(""),
  mensaje: z.string().trim().min(10).max(5000),
  consentimiento: z.literal(true),
  // Honeypot: hidden from people, so only bots fill it in.
  sitio: z.string().default(""),
});

type ContactRequest = z.infer<typeof contactRequestSchema>;

const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ");

function serviceLabel(value: string) {
  return contactServiceOptions.find((option) => option.value === value)?.label ?? "Sin especificar";
}

function buildEmail(contact: ContactRequest) {
  const name = singleLine(contact.nombre);
  const company = singleLine(contact.empresa);

  return {
    subject: `Nuevo contacto web: ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Nombre: ${name}`,
      `Empresa: ${company || "No indicada"}`,
      `Correo: ${contact.email}`,
      `Teléfono: ${singleLine(contact.telefono) || "No indicado"}`,
      `Servicio de interés: ${serviceLabel(contact.servicio)}`,
      "",
      "Mensaje:",
      contact.mensaje,
      "",
      "El remitente autorizó el tratamiento de sus datos en el formulario del sitio.",
    ].join("\n"),
  };
}

async function deliverEmail(contact: ContactRequest, apiKey: string, from: string) {
  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [process.env.CONTACT_EMAIL_TO || DEFAULT_RECIPIENT],
        reply_to: contact.email,
        ...buildEmail(contact),
      }),
      signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
    });
    if (response.ok) return true;
    console.error("Resend rechazó el mensaje de contacto", response.status, await response.text());
    return false;
  } catch (error) {
    console.error("No se pudo contactar a Resend", error);
    return false;
  }
}

export const Route = createFileRoute("/api/contacto")({
  server: {
    handlers: {
      GET: () => new Response(null, { status: 405, headers: { Allow: "POST" } }),
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.CONTACT_EMAIL_FROM;
        if (!apiKey || !from) {
          console.error("Formulario sin configurar: faltan RESEND_API_KEY o CONTACT_EMAIL_FROM");
          return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
        }

        const parsed = contactRequestSchema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) {
          return Response.json({ ok: false, error: "invalid" }, { status: 400 });
        }
        if (parsed.data.sitio) return Response.json({ ok: true });

        const delivered = await deliverEmail(parsed.data, apiKey, from);
        return delivered
          ? Response.json({ ok: true })
          : Response.json({ ok: false, error: "delivery_failed" }, { status: 502 });
      },
    },
  },
});
