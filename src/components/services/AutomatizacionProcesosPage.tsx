import { Link } from "@tanstack/react-router";
import { ArrowRight, Workflow, Clock, Bot, Zap, Network, Layers, GitMerge } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function AutomatizacionProcesosPage() {
  return (
    <>
      <PageHero
        eyebrow="Automatización de Procesos"
        title="Flujos de trabajo que operan solos"
        subtitle="Elimina el trabajo manual repetitivo. Conectamos tus sistemas y diseñamos automatizaciones inteligentes para que tu equipo se enfoque en estrategias, no en hacer clics."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Descubrir qué automatizar <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="La velocidad es la nueva ventaja competitiva"
            subtitle="Si tus empleados actúan como robots copiando y pegando datos entre Excel y un CRM, estás perdiendo dinero y talento."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema</h3>
                <p className="text-muted-foreground flex-1">
                  Procesos burocráticos, errores humanos costosos y horas facturables desperdiciadas en tareas administrativas de nulo valor agregado.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Workflow className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Interconectamos tus herramientas actuales vía API e implementamos bots (RPA) que ejecutan reglas de negocio 24/7 sin descanso ni errores.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Resultado</h3>
                <p className="text-muted-foreground flex-1">
                  Operaciones ultrarrápidas. Procesos que antes tomaban días enteros de revisión, ahora se completan en milisegundos de forma automática.
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
                  Arquitectura de hiperautomatización
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  No nos limitamos a "conectar apps". Rediseñamos el proceso (TO-BE) y construimos flujos resilientes mediante código a la medida o Low-Code corporativo.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Network, title: "Integración de APIs", desc: "Sincronización en tiempo real entre CRMs, ERPs y plataformas." },
                  { icon: Bot, title: "RPA y Bots", desc: "Software que simula interacciones humanas para sistemas legacy." },
                  { icon: Layers, title: "Soluciones Low-Code", desc: "Desarrollo acelerado de flujos usando Power Automate o Make." },
                  { icon: GitMerge, title: "Flujos de Aprobación", desc: "Sistemas digitales de firmas y auditoría sin usar papel." }
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
              {/* Representación visual abstracta de flujos y nodos */}
              <div className="relative w-full max-w-md h-64 flex items-center justify-center">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }} 
                   whileInView={{ opacity: 1, scale: 1 }} 
                   className="absolute left-0 w-16 h-16 rounded-2xl bg-surface border border-border shadow-sm flex items-center justify-center z-10"
                 >
                    <Layers className="w-6 h-6 text-foreground/50" />
                 </motion.div>
                 
                 <motion.div 
                   initial={{ scaleX: 0 }} 
                   whileInView={{ scaleX: 1 }} 
                   transition={{ delay: 0.2, duration: 0.5 }}
                   className="absolute left-16 right-1/2 h-0.5 bg-gradient-to-r from-border to-primary origin-left" 
                 />

                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }} 
                   whileInView={{ opacity: 1, scale: 1 }} 
                   transition={{ delay: 0.4 }}
                   className="absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-primary shadow-elegant flex items-center justify-center z-10"
                 >
                    <Bot className="w-8 h-8 text-primary-foreground" />
                 </motion.div>

                 <motion.div 
                   initial={{ scaleX: 0 }} 
                   whileInView={{ scaleX: 1 }} 
                   transition={{ delay: 0.6, duration: 0.5 }}
                   className="absolute right-16 left-1/2 h-0.5 bg-gradient-to-r from-primary to-emerald-500/50 origin-left" 
                 />
                 
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }} 
                   whileInView={{ opacity: 1, scale: 1 }} 
                   transition={{ delay: 0.8 }}
                   className="absolute right-0 w-16 h-16 rounded-2xl bg-surface border border-border shadow-sm flex items-center justify-center z-10"
                 >
                    <Network className="w-6 h-6 text-emerald-500" />
                 </motion.div>
                 
                 {/* Partículas animadas moviéndose a través de la línea */}
                 <motion.div
                   animate={{ left: ["10%", "90%"], opacity: [0, 1, 0] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Orientada a Negocio */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            title="Eficiencia que impacta la rentabilidad"
            subtitle="La hiperautomatización no es un lujo técnico, es una estrategia de supervivencia empresarial para reducir drásticamente el costo operativo."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Productividad x10", text: "Tu equipo hace más con menos. Eliminas los cuellos de botella administrativos de forma definitiva.", value: "10x" },
              { title: "Cero Errores", text: "El software no se cansa, no se distrae y no tipea mal. Precisión absoluta en la manipulación de datos.", value: "0%" },
              { title: "Escalabilidad", text: "Si tus ventas se triplican mañana, tu backoffice automatizado soporta la carga sin contratar más personal.", value: "Scale" },
              { title: "Ahorro de Costos", text: "Recuperación de la inversión (ROI) ultrarrápida al reemplazar horas-hombre por minutos-máquina.", value: "ROI" }
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

export default AutomatizacionProcesosPage;
