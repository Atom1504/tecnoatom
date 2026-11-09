import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logoLight from "@/assets/logo-tecnoatom-light.png";
import { WhatsAppIcon } from "@/components/ui-custom/WhatsAppIcon";
import { services } from "@/data/services";
import { CONTACT } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />
      <div className="container-x relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={logoLight} alt="TECNOATOM" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm text-white/70">
              Soluciones empresariales que transforman datos en decisiones, procesos en ventajas
              competitivas y software en resultados medibles.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>{CONTACT.address}</span>
              </div>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 text-accent" />
                WhatsApp
              </a>
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-accent" />
                {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-accent" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Instagram className="h-4 w-4 text-accent" />
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Empresa</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link to="/nosotros" className="hover:text-accent">Nosotros</Link></li>
              <li><Link to="/industrias" className="hover:text-accent">Industrias</Link></li>
              <li><Link to="/constructa" className="hover:text-accent">Constructa ERP</Link></li>
              <li><Link to="/contacto" className="hover:text-accent">Contacto</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Servicios</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/servicios/$slug" params={{ slug: s.slug }} className="hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Soluciones empresariales
            </h4>
            <p className="mt-4 text-sm text-white/70">
              ¿Listo para transformar tu operación? Hablemos y diseñemos juntos la arquitectura
              tecnológica que tu empresa merece.
            </p>
            <Link
              to="/contacto"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-foreground transition hover:brightness-110"
            >
              Iniciar conversación
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TECNOATOM · Empresa de software. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/politica-de-datos" className="underline-offset-2 hover:text-white hover:underline">
              Política de tratamiento de datos
            </Link>
            <span>Bucaramanga · Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
