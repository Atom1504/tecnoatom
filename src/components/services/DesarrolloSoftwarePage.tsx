import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Cpu, Zap, CheckCircle2, LayoutGrid, Layers, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function DesarrolloSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Desarrollo a la Medida"
        title="Software que acelera tu operación empresarial"
        subtitle="Construimos plataformas y aplicaciones web propietarias diseñadas exactamente para tus procesos. Elimina cuellos de botella, automatiza flujos y escala sin las limitaciones del software genérico."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Agendar asesoría técnica <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor (Problema, Beneficios, Por qué nosotros) */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="El software debe adaptarse a ti, no al revés"
            subtitle="Las herramientas empaquetadas obligan a tu empresa a cambiar sus procesos. Nosotros desarrollamos tecnología que potencia lo que ya haces bien."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <RefreshCcw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema Actual</h3>
                <p className="text-muted-foreground flex-1">
                  Tu equipo pierde horas en tareas manuales sincronizando Excels o luchando con un software rígido que no cubre el 100% de la operativa del negocio.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Zap className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Un sistema unificado y a la medida. Centraliza la información, automatiza aprobaciones y brinda a tus colaboradores una herramienta intuitiva y rápida.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Por qué TECNOATOM</h3>
                <p className="text-muted-foreground flex-1">
                  No somos solo programadores; somos consultores. Entendemos tu modelo de negocio antes de escribir una sola línea de código para asegurar el ROI.
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
            <div>
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  Arquitectura robusta, escalable y propietaria
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Desarrollamos con el stack tecnológico de las empresas más innovadoras del mundo. Código limpio, seguro y 100% de tu propiedad.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: LayoutGrid, title: "Plataformas Web & SaaS", desc: "Portales de clientes y paneles administrativos." },
                  { icon: Layers, title: "Integración de APIs", desc: "Conectamos tu nuevo software con ERPs o CRMs." },
                  { icon: Code2, title: "Stack Moderno", desc: "React, Node.js, TypeScript y arquitecturas Cloud." },
                  { icon: Cpu, title: "Alta Concurrencia", desc: "Sistemas preparados para miles de usuarios simultáneos." }
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
            <div className="relative lg:h-[500px] rounded-3xl overflow-hidden border border-border bg-card/50 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
              {/* Representación visual abstracta de código / plataforma */}
              <div className="relative w-full max-w-md space-y-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="h-12 w-3/4 rounded-lg bg-surface border border-border shadow-sm" />
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="h-32 w-full rounded-xl bg-gradient-to-br from-surface to-surface-2 border border-border shadow-md p-4 flex flex-col gap-3">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                     <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                   </div>
                   <div className="w-1/2 h-2 rounded bg-foreground/10" />
                   <div className="w-full h-2 rounded bg-foreground/5" />
                   <div className="w-4/5 h-2 rounded bg-foreground/5" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-24 w-5/6 rounded-lg bg-surface border border-border shadow-sm ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Orientada a Negocio */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            title="Impacto directo en la rentabilidad"
            subtitle="Una inversión tecnológica debe generar retornos medibles. Nuestro enfoque de desarrollo prioriza el valor comercial."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Reducción de Costos", text: "Al automatizar procesos manuales, reduces drásticamente las horas-hombre desperdiciadas.", value: "ROI" },
              { title: "Propiedad Intelectual", text: "Sin licencias mensuales abusivas. El código es un activo que le pertenece a tu empresa.", value: "100%" },
              { title: "Escalabilidad Total", text: "La infraestructura crece automáticamente según la demanda de tus usuarios o clientes.", value: "∞" },
              { title: "Seguridad Grado Enterprise", text: "Protección de datos desde el diseño, cumpliendo normativas internacionales de privacidad.", value: "SLA" }
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

export default DesarrolloSoftwarePage;
