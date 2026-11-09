import { useId, useState, type ComponentType, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui-custom/Reveal";
import { WhatsAppIcon } from "@/components/ui-custom/WhatsAppIcon";
import { contactServiceOptions } from "@/data/services";
import { CONTACT } from "@/lib/site";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const labelClass =
  "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground";
const controlClass =
  "w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
const inlineLinkClass = "font-medium text-primary underline underline-offset-2";

async function submitContactForm(form: HTMLFormElement) {
  const fields = Object.fromEntries(new FormData(form));
  const response = await fetch("/api/contacto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...fields, consentimiento: fields.consentimiento === "on" }),
  });
  return response.ok;
}

export function ContactSection({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const serviceId = useId();
  const messageId = useId();
  const consentId = useId();
  const isSending = status === "sending";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const delivered = await submitContactForm(form).catch(() => false);
    if (!delivered) {
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("success");
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                Hablemos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Cuéntanos tu proyecto.<br />
                Te respondemos en <span className="text-gradient">24 horas hábiles</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-muted-foreground">
                Sin compromisos, sin guiones. Una conversación directa para entender qué necesitas
                y proponerte la mejor ruta tecnológica.
              </p>
            </Reveal>

            <div className="mt-6 space-y-2">
              <ContactRow icon={MapPin} title="Visítanos" text={CONTACT.address} />
              <ContactRow
                icon={WhatsAppIcon}
                title="WhatsApp"
                text={CONTACT.phone}
                href={CONTACT.whatsappHref}
                external
              />
              <ContactRow
                icon={Phone}
                title="Llámanos"
                text={CONTACT.phone}
                href={CONTACT.phoneHref}
              />
              <ContactRow
                icon={Mail}
                title="Escríbenos"
                text={CONTACT.email}
                href={CONTACT.emailHref}
              />
              <ContactRow icon={Clock} title="Horario de atención" text={CONTACT.hours} />
            </div>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div
                aria-hidden
                className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-primary opacity-10 blur-2xl"
              />
              <p className="mb-4 text-xs text-muted-foreground">
                Los campos marcados con <span className="text-destructive">*</span> son obligatorios.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  minLength={2}
                  maxLength={120}
                  required
                />
                <Field
                  label="Empresa"
                  name="empresa"
                  placeholder="Tu empresa"
                  autoComplete="organization"
                  maxLength={160}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
                <Field
                  label="Teléfono"
                  name="telefono"
                  type="tel"
                  placeholder="+57 300 0000000"
                  autoComplete="tel"
                  maxLength={40}
                />
              </div>
              <div className="mt-4">
                <label htmlFor={serviceId} className={labelClass}>
                  Servicio de interés
                </label>
                <select
                  key={defaultService}
                  id={serviceId}
                  name="servicio"
                  className={`h-11 ${controlClass}`}
                  defaultValue={defaultService}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {contactServiceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor={messageId} className={labelClass}>
                  Mensaje <RequiredMark />
                </label>
                <textarea
                  id={messageId}
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos tu reto o idea…"
                  minLength={10}
                  maxLength={5000}
                  required
                  className={`py-2.5 ${controlClass}`}
                />
              </div>

              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  No completar este campo
                  <input type="text" name="sitio" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="mt-4 flex items-start gap-2.5">
                <input
                  id={consentId}
                  type="checkbox"
                  name="consentimiento"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]"
                />
                <label htmlFor={consentId} className="text-xs text-muted-foreground">
                  Autorizo el tratamiento de mis datos según la{" "}
                  <Link to="/politica-de-datos" target="_blank" className={inlineLinkClass}>
                    política de tratamiento de datos
                  </Link>
                  . <RequiredMark />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary text-sm font-semibold text-primary-foreground shadow-elegant transition hover:shadow-glow disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
                  </>
                ) : (
                  <>
                    Enviar mensaje <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <div role="status">
                {status === "success" && (
                  <p className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    Recibimos tu mensaje. Te respondemos en menos de 24 horas hábiles.
                  </p>
                )}
              </div>
              <div role="alert">
                {status === "error" && (
                  <p className="mt-4 flex items-start gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-foreground">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span>
                      No pudimos enviar tu mensaje; tus datos siguen en el formulario. Inténtalo de
                      nuevo o contáctanos por{" "}
                      <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={inlineLinkClass}
                      >
                        WhatsApp
                      </a>
                      , al{" "}
                      <a href={CONTACT.phoneHref} className={inlineLinkClass}>
                        {CONTACT.phone}
                      </a>{" "}
                      o a{" "}
                      <a href={CONTACT.emailHref} className={inlineLinkClass}>
                        {CONTACT.email}
                      </a>
                      .
                    </span>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-destructive">
      *
    </span>
  );
}

function ContactRow({
  icon: Icon,
  title,
  text,
  href,
  external,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
  href?: string;
  external?: boolean;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  const linkProps = href
    ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : {};
  return (
    <Wrapper
      {...linkProps}
      className="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition hover:border-border hover:bg-surface"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="text-sm font-medium text-foreground">{text}</div>
      </div>
    </Wrapper>
  );
}

function Field({
  label,
  type = "text",
  required,
  ...inputProps
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete: string;
  minLength?: number;
  maxLength?: number;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <RequiredMark />}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className={`h-11 ${controlClass}`}
        {...inputProps}
      />
    </div>
  );
}

export default ContactSection;
