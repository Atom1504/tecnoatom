import { Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Target, Compass, LineChart, ShieldAlert, BarChart3, Presentation, Users } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function ConsultoriaTIPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultoría TI Estratégica"
        title="Decisiones tecnológicas de alto impacto"
        subtitle="Acompañamos a la alta dirección a traducir objetivos de negocio en una estrategia tecnológica coherente, rentable y ejecutable. Deja de improvisar y opera con un plan claro."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Agendar diagnóstico <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="Alineamos la tecnología con tu visión de negocio"
            subtitle="La tecnología sin estrategia es solo un gasto. Nosotros la convertimos en la principal ventaja competitiva de tu empresa."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema</h3>
                <p className="text-muted-foreground flex-1">
                  Inversiones tecnológicas que no generan ROI, sistemas desconectados y decisiones basadas en la intuición en lugar de en datos y arquitectura.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Compass className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Un Roadmap Tecnológico a 12-36 meses. Auditamos tu situación actual, definimos la arquitectura objetivo y trazamos el camino más seguro para llegar ahí.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Resultado</h3>
                <p className="text-muted-foreground flex-1">
                  Claridad absoluta para la junta directiva. Cada dólar invertido en software o infraestructura tiene una justificación estratégica clara.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sección de Capacidades */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative lg:h-[500px] rounded-3xl overflow-hidden border border-border bg-card/50 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
              {/* Representación visual abstracta de roadmap */}
              <div className="relative w-full max-w-md">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                {[1, 2, 3].map((step, i) => (
                  <motion.div 
                    key={step}
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.2 }}
                    className="relative pl-16 py-4"
                  >
                    <div className="absolute left-[21px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />
                    <div className="bg-surface border border-border rounded-xl p-4 shadow-sm">
                      <div className="h-4 w-24 bg-foreground/10 rounded mb-2" />
                      <div className="h-2 w-full bg-foreground/5 rounded mb-1" />
                      <div className="h-2 w-2/3 bg-foreground/5 rounded" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  Nuestras capacidades de consultoría
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Combinamos experiencia de negocio con conocimiento técnico profundo para guiar la transformación de tu empresa.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Presentation, title: "Auditoría de Arquitectura", desc: "Evaluación del estado actual de tu ecosistema de software." },
                  { icon: Target, title: "Roadmap Tecnológico", desc: "Planificación estratégica por trimestres con KPIs." },
                  { icon: ShieldAlert, title: "Gestión de Riesgos", desc: "Identificación de vulnerabilidades y deudas técnicas críticas." },
                  { icon: Users, title: "Acompañamiento Ejecutivo", desc: "Asesoría para CIOs y juntas directivas en licitaciones." }
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-4 items-start p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="mt-1 text-primary shrink-0"><item.icon className="w-5 h-5" /></div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Orientada a Negocio */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            title="Impacto directo en el negocio"
            subtitle="La consultoría estratégica de TECNOATOM está diseñada para líderes que necesitan garantías antes de invertir."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Visibilidad Total", text: "Terminamos con las cajas negras. Entenderás exactamente qué hace cada sistema y por qué lo necesitas.", value: "360°" },
              { title: "Reducción de Riesgo", text: "Evitamos compras de software innecesarias o desarrollos abocados al fracaso por falta de planificación.", value: "-80%" },
              { title: "Alineación Estratégica", text: "TI deja de ser un centro de costos y se convierte en el motor de innovación de la compañía.", value: "WIN" },
              { title: "Gobierno Corporativo", text: "Establecemos políticas claras para la adopción de nuevas tecnologías e inteligencia artificial.", value: "100%" }
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors group">
                  <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">{b.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default ConsultoriaTIPage;
