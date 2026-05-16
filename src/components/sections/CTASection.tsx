import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui-custom/Reveal";

export function CTASection({
  title = "¿Listo para construir tu próxima ventaja competitiva?",
  subtitle = "Hablemos. Te respondemos rápido y proponemos sin compromiso.",
  primaryHref = "/contacto",
  primaryLabel = "Iniciar un proyecto",
}: {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-hero px-6 py-16 text-center text-white shadow-elegant sm:px-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
          <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-glow/40 blur-3xl"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-base text-white/75 sm:text-lg">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to={primaryHref}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110 hover:-translate-y-0.5"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+573142671185"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default CTASection;