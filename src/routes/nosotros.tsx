import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { CTASection } from "@/components/sections/CTASection";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — TECNOATOM" },
      { name: "description", content: "Conoce a TECNOATOM: equipo, misión, visión y valores de una empresa de software con propósito." },
      { property: "og:title", content: "Nosotros — TECNOATOM" },
      { property: "og:description", content: "Equipo, misión y visión de TECNOATOM." },
    ],
  }),
  component: NosotrosPage,
});

const timeline = [
  { year: "2013", title: "Fundación", text: "Nace TECNOATOM en Bucaramanga con una idea simple: software que mueve negocios." },
  { year: "2016", title: "Primer cliente corporativo", text: "Empezamos a trabajar con empresas medianas del sector industrial." },
  { year: "2019", title: "Constructa nace", text: "Lanzamos la primera versión de Constructa, ERP para construcción de licitación." },
  { year: "2021", title: "Expansión nacional", text: "Clientes en 12 ciudades del país y crecimiento del equipo." },
  { year: "2024", title: "Plataforma cloud", text: "Migramos Constructa a una arquitectura cloud-native moderna." },
  { year: "Hoy", title: "Empresa de software consolidada", text: "Más de 80 proyectos entregados y un equipo senior multidisciplinario." },
];

const valores = [
  { icon: Heart, title: "Compromiso", text: "Tu proyecto es nuestro proyecto. Punto." },
  { icon: Award, title: "Excelencia", text: "Lo bueno no basta. Buscamos lo notable." },
  { icon: Users, title: "Cercanía", text: "Equipos accesibles, comunicación honesta." },
  { icon: Lightbulb, title: "Innovación", text: "Curiosidad técnica al servicio del negocio." },
];

function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa de software hecha por personas que aman crear"
        subtitle="Más de 12 años transformando ideas en plataformas que mueven empresas reales en Colombia."
      />

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={aboutTeam} alt="Equipo TECNOATOM" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Tecnología con propósito"
              subtitle="Empezamos siendo un equipo pequeño con grandes convicciones. Hoy somos una empresa consolidada, pero seguimos creyendo en lo mismo: el software bien hecho cambia compañías."
              align="left"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            { icon: Target, title: "Misión", text: "Diseñar, construir y operar soluciones de software que generen ventajas competitivas sostenibles a nuestros clientes." },
            { icon: Eye, title: "Visión", text: "Ser referente latinoamericano en software empresarial y en plataformas verticales como Constructa." },
            { icon: Heart, title: "Promesa", text: "Software bien hecho, equipos comprometidos y resultados que se miden." },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Nuestro camino" title="Línea de tiempo" subtitle="Hitos que nos definieron." />
          <div className="relative mt-16">
            <div aria-hidden className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent lg:left-1/2 lg:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className={`relative grid gap-4 pl-12 lg:grid-cols-2 lg:gap-12 lg:pl-0 ${i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"}`}
                >
                  <div aria-hidden className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-gradient-primary ring-4 ring-background lg:left-1/2 lg:-translate-x-1/2" />
                  <div className={i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {t.year}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                  <div />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Lo que nos mueve" title="Valores que practicamos a diario" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MetricsBand />
      <CTASection title="Trabajemos juntos" subtitle="Tenemos el equipo, la experiencia y la pasión. Sólo falta tu reto." />
    </>
  );
}
