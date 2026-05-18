import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui-custom/Reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
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
                Te respondemos en <span className="text-gradient">24 horas</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-muted-foreground">
                Sin compromisos, sin guiones. Una conversación directa para entender qué necesitas
                y proponerte la mejor ruta tecnológica.
              </p>
            </Reveal>

            <div className="mt-6 space-y-2">
              <ContactRow
                icon={MapPin}
                title="Visítanos"
                text="Cl 36 #27-71, Mejoras Públicas, Bucaramanga, Santander"
              />
              <ContactRow
                icon={Phone}
                title="Llámanos"
                text="+57 314 267 1185"
                href="tel:+573142671185"
              />
              <ContactRow
                icon={Mail}
                title="Escríbenos"
                text="contacto@tecnoatom.com"
                href="mailto:contacto@tecnoatom.com"
              />
              <ContactRow
                icon={Clock}
                title="Horario de atención"
                text="Lunes a viernes · 8:00 a.m. – 6:00 p.m."
              />
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
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
                <Field label="Empresa" name="empresa" placeholder="Tu empresa" />
                <Field label="Email" name="email" type="email" placeholder="tu@empresa.com" required />
                <Field label="Teléfono" name="telefono" placeholder="+57 300 0000000" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Servicio de interés
                </label>
                <select
                  name="servicio"
                  className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  defaultValue=""
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Desarrollo de Software a la Medida</option>
                  <option>Consultoría TI Estratégica</option>
                  <option>Ciberseguridad Empresarial</option>
                  <option>Automatización de Procesos</option>
                  <option>Datos & Analítica</option>
                  <option>Aplicaciones Móviles</option>
                  <option>Otros</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos tu reto o idea…"
                  required
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary text-sm font-semibold text-primary-foreground shadow-elegant transition hover:shadow-glow disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Mensaje enviado
                  </>
                ) : (
                  <>
                    Enviar mensaje <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Al enviar aceptas nuestra política de tratamiento de datos.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
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
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

export default ContactSection;