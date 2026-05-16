import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { getServiceBySlug, services } from "@/data/services";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export const Route = createFileRoute("/servicios/$slug")({
  head: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Servicio"} — TECNOATOM` },
        { name: "description", content: s?.short ?? "Servicio profesional TECNOATOM." },
        { property: "og:title", content: `${s?.title ?? "Servicio"} — TECNOATOM` },
        { property: "og:description", content: s?.short ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Servicio no encontrado</h1>
      <Link to="/servicios" className="mt-6 inline-flex text-primary underline">Ver todos los servicios</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x py-32 text-center text-sm text-muted-foreground">
      {error.message}
    </div>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <PageHero eyebrow="Servicio" title={service.title} subtitle={service.description}>
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Solicitar propuesta <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/servicios"
          className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
        >
          Ver todos los servicios
        </Link>
      </PageHero>

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <Icon className="h-6 w-6" />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                ¿Qué incluye este servicio?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted-foreground">
                Diseñamos un alcance específico para tu empresa. Estas son las capacidades base que ofrecemos en {service.title.toLowerCase()}:
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-28 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <h3 className="text-lg font-semibold">Beneficios clave</h3>
                <div className="mt-5 space-y-4">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="rounded-xl bg-surface p-4">
                      <div className="text-sm font-semibold text-foreground">{b.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{b.text}</div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contacto"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary text-sm font-semibold text-primary-foreground shadow-elegant"
                >
                  Agendar conversación <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Cómo lo hacemos"
            title="Proceso probado, sin sorpresas"
            subtitle="Una metodología clara que entrega valor en cada fase."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {service.processSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Otros servicios" title="También podemos ayudarte con" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/servicios/$slug"
                params={{ slug: o.slug }}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <o.icon className="h-4 w-4" />
                </div>
                <div className="text-base font-semibold">{o.title}</div>
                <div className="text-sm text-muted-foreground">{o.short}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
