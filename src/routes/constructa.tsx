import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, Building2, ClipboardCheck, Layers, ShoppingCart,
  Users, FileSpreadsheet, Calendar, TrendingUp, ShieldCheck, FileText, Check,
} from "lucide-react";
import { Reveal } from "@/components/ui-custom/Reveal";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import constructaBg from "@/assets/constructa-bg.jpg";

export const Route = createFileRoute("/constructa")({
  head: () => ({
    meta: [
      { title: "Constructa ERP — Software para construcción de licitación | TECNOATOM" },
      { name: "description", content: "Constructa es el ERP especializado en proyectos de construcción de licitación pública. Presupuesto, compras, avance, proveedores y analítica en una plataforma." },
      { property: "og:title", content: "Constructa ERP — TECNOATOM" },
      { property: "og:description", content: "ERP especializado para empresas que ejecutan obras de licitación." },
    ],
  }),
  component: ConstructaPage,
});

const modules = [
  { icon: ShoppingCart, title: "Gestión de compras", text: "Solicitudes, órdenes y aprobaciones con trazabilidad completa." },
  { icon: BarChart3, title: "Dashboards ejecutivos", text: "Vista 360° de cada obra y de toda la empresa en tiempo real." },
  { icon: ClipboardCheck, title: "Control de presupuestos", text: "Comparativo presupuesto vs. ejecutado por capítulo y partida." },
  { icon: Layers, title: "Gestión de proyectos", text: "Múltiples obras, equipos y centros de costo bajo una misma operación." },
  { icon: Users, title: "Gestión de proveedores", text: "Analítica de compras, evaluación de desempeño y precios históricos." },
  { icon: Building2, title: "Avance de obra", text: "Registro físico y financiero, con alertas tempranas de desviación." },
  { icon: FileText, title: "Creación de informes", text: "Informes para interventoría y entes de control en un click." },
  { icon: Calendar, title: "Cronograma automático", text: "Programación inteligente y reprogramación según avance real." },
  { icon: TrendingUp, title: "Analítica avanzada", text: "Indicadores de rentabilidad por obra, partida y proveedor." },
  { icon: FileSpreadsheet, title: "APU y precios unitarios", text: "Biblioteca centralizada de análisis de precios unitarios." },
  { icon: ShieldCheck, title: "Auditoría y control", text: "Trazabilidad total: cada decisión deja huella verificable." },
];

const idealPara = [
  "Empresas constructoras que licitan con el Estado",
  "Consorcios y uniones temporales",
  "Constructoras del sector privado con múltiples obras",
  "Empresas de obra civil e infraestructura",
  "Interventorías que requieren control sobre múltiples proyectos",
];

function ConstructaPage() {
  return (
    <>
      <section className="relative isolate -mt-20 overflow-hidden pt-32 text-white">
        <img src={constructaBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, oklch(0.12 0.04 280 / 0.96) 0%, oklch(0.2 0.08 290 / 0.88) 55%, oklch(0.32 0.13 295 / 0.85) 100%)" }}
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" aria-hidden />
        <div className="container-x relative z-10 pb-24 pt-16 sm:pb-32 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Software ERP de TECNOATOM
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-gradient-accent">Constructa</span>
                  <br />
                  El ERP de la construcción que sí licita.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
                  Diseñado para empresas que ejecutan obras de licitación pública —
                  donde cada peso, cada partida y cada hito importa.
                  También se adapta perfectamente a obras del sector privado.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contacto" className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110 hover:-translate-y-0.5">
                    Solicitar demostración <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a href="#modulos" className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                    Ver módulos
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="glass rounded-3xl border-white/10 p-6 shadow-glow">
                  <div className="flex items-center justify-between text-xs text-white/65">
                    <span>Resumen ejecutivo · Q2</span>
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent">En línea</span>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { k: "12", v: "Obras activas" },
                      { k: "$48.2B", v: "Ejecutado YTD" },
                      { k: "92%", v: "Avance promedio" },
                      { k: "187", v: "Proveedores" },
                    ].map((kpi) => (
                      <div key={kpi.v} className="rounded-xl bg-white/5 p-4">
                        <div className="text-2xl font-semibold text-white">{kpi.k}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-wider text-white/60">{kpi.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      { name: "Obra Edificio Andina", value: 78, color: "from-primary-glow to-accent" },
                      { name: "Vía Rural Sur", value: 54, color: "from-accent to-primary-glow" },
                      { name: "Hospital Regional", value: 31, color: "from-primary-glow to-primary" },
                    ].map((p) => (
                      <div key={p.name}>
                        <div className="flex items-center justify-between text-xs text-white/75">
                          <span>{p.name}</span><span>{p.value}%</span>
                        </div>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="¿Por qué Constructa?"
            title="Hecho para la realidad de la construcción de licitación"
            subtitle="No es un ERP genérico adaptado. Es una plataforma diseñada desde cero con interventores, residentes y gerentes de obra colombianos."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Hablamos APU", text: "Análisis de precios unitarios como ciudadano de primera clase, no un anexo." },
              { title: "Trazabilidad de licitación", text: "Desde la propuesta hasta la liquidación. Todo conectado." },
              { title: "Múltiples obras", text: "Una sola empresa, decenas de proyectos simultáneos, control total." },
              { title: "Informes para entes de control", text: "Plantillas pensadas para interventoría y entidades estatales." },
              { title: "Implementación rápida", text: "Salimos en producción en semanas, no en meses." },
              { title: "Capacitación incluida", text: "Tu equipo no se queda solo. Te acompañamos hasta la adopción." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="modulos" className="bg-surface py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Módulos"
            title="Todo lo que tu obra necesita, en una sola plataforma"
            subtitle="Olvídate de Excel sueltos y sistemas desconectados. Constructa integra cada proceso de la operación."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              >
                <div aria-hidden className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Ideal para"
                title="¿Constructa es para ti?"
                subtitle="Si te identificas con alguno de estos perfiles, deberíamos hablar."
                align="left"
              />
              <ul className="mt-8 space-y-3">
                {idealPara.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl bg-gradient-hero p-8 text-white shadow-elegant sm:p-12">
              <div className="absolute inset-0 rounded-3xl bg-gradient-radial opacity-70" aria-hidden />
              <div className="relative z-10">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">Demostración personalizada</div>
                <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Ve Constructa <span className="text-gradient-accent">en tu operación</span>
                </h3>
                <p className="mt-4 text-white/75">
                  Agenda una sesión de 30 minutos. Te mostramos exactamente cómo funcionaría en tu tipo de obra,
                  sin compromiso.
                </p>
                <Link to="/contacto" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110">
                  Agendar demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Lleva el control real de tus obras"
        subtitle="Constructa es la herramienta que tu equipo necesita para entregar mejor, más rápido y con mayor rentabilidad."
        primaryLabel="Solicitar demostración"
      />
    </>
  );
}
