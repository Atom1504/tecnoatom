import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui-custom/Reveal";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function ServicesGrid({
  limit,
  showEyebrow = true,
}: {
  limit?: number;
  showEyebrow?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;
  const hasMore = list.length < services.length;

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="container-x">
        <SectionHeading
          eyebrow={showEyebrow ? "Servicios" : undefined}
          title="Tecnología que resuelve problemas reales"
          subtitle="Diseñamos, construimos y operamos las soluciones digitales que tu empresa necesita para competir y escalar."
        />

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant sm:p-6"
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                />
                <div className="relative flex items-start gap-4 sm:block">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant sm:h-12 sm:w-12">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight sm:mt-5 sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground sm:mt-2">{s.short}</p>
                    <div className="mt-6 hidden items-center gap-1.5 text-sm font-medium text-primary sm:inline-flex">
                      Conocer más
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <Link
              to="/servicios"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Ver los {services.length} servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesGrid;
