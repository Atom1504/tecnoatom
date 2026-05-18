import { Link } from "@tanstack/react-router";
import { ArrowRight, Database, ServerCrash, Gauge, ShieldCheck, Activity, HardDrive, RefreshCw, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function BasesDeDatosPage() {
  return (
    <>
      <PageHero
        eyebrow="Gestión de Bases de Datos"
        title="El motor de tu empresa, siempre a máxima velocidad"
        subtitle="Arquitectura, optimización y administración (DBA) de bases de datos críticas. Consultas en milisegundos, escalabilidad sin límites y cero pérdida de información."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Evaluar rendimiento actual <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="La lentitud cuesta dinero. Las caídas cuestan reputación."
            subtitle="Una aplicación es tan rápida y confiable como la base de datos que la sostiene. Resolvemos el origen técnico de tus cuellos de botella."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <ServerCrash className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema</h3>
                <p className="text-muted-foreground flex-1">
                  Sistemas que se congelan cuando hay muchos usuarios, consultas que tardan minutos en cargar, y el riesgo constante de perder datos por falta de respaldos.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Database className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Auditoría profunda, reestructuración de índices, afinación de consultas (Tuning) y arquitecturas en clúster para alta disponibilidad.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Resultado</h3>
                <p className="text-muted-foreground flex-1">
                  Aplicaciones que responden instantáneamente sin importar la carga. Datos íntegros, respaldados y listos para escalar junto con el negocio.
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
              {/* Representación visual abstracta de BD */}
              <div className="relative w-full max-w-sm flex flex-col gap-4">
                {[1, 2, 3].map((layer, i) => (
                  <motion.div 
                    key={layer}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.15 }}
                    className="relative bg-surface border border-border rounded-xl shadow-elegant p-4 overflow-hidden group"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-primary" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-primary/70" />
                        <div>
                          <div className="text-sm font-semibold">Node {layer} {layer === 1 ? '(Primary)' : '(Replica)'}</div>
                          <div className="text-xs text-emerald-500 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Healthy</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Activity className="w-3 h-3" /> {(layer * 12 + 10).toFixed(0)}% CPU
                        </div>
                        <div className="w-16 h-1 bg-foreground/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${layer * 20 + 20}%` }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.6 }}
                  className="mt-2 flex justify-between items-center px-4"
                >
                  <div className="h-px bg-border flex-1" />
                  <div className="px-4 text-xs font-mono text-muted-foreground bg-card border border-border rounded-full py-1 shadow-sm flex items-center gap-2">
                    <RefreshCw className="w-3 h-3 text-primary animate-spin" /> Syncing
                  </div>
                  <div className="h-px bg-border flex-1" />
                </motion.div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  Expertise profundo en motores de datos
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ya sea SQL o NoSQL, on-premise o en la nube, diseñamos la capa de persistencia para soportar el crecimiento más agresivo.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Gauge, title: "Performance Tuning", desc: "Optimización de consultas lentas e indexación avanzada." },
                  { icon: ShieldCheck, title: "Alta Disponibilidad", desc: "Clústers, replicación activa y arquitecturas multi-región." },
                  { icon: HardDrive, title: "Migraciones Zero-Downtime", desc: "Cambio de motores (ej: Oracle a PostgreSQL) sin apagar tu app." },
                  { icon: Activity, title: "DBA As-a-Service", desc: "Monitoreo 24/7 y mantenimiento preventivo continuo." }
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
            title="Soporte invisible, impacto tangible"
            subtitle="Los usuarios solo notan la base de datos cuando falla o es lenta. Nuestro trabajo es garantizar que nunca tengan que pensar en ella."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Velocidad Operativa", text: "Procesos de cierre mensual o reportes pesados que pasan de horas a minutos.", value: "Zap" },
              { title: "Continuidad del Negocio", text: "Si un servidor se incendia, tu base de datos conmutará automáticamente a otro nodo.", value: "99.9%" },
              { title: "Reducción de Costos", text: "Una base de datos optimizada requiere servidores más pequeños y baratos en la nube.", value: "-40%" },
              { title: "Cero Pérdida", text: "Estrategias de Point-in-Time Recovery. Recupera tu información exacta al segundo previo a un desastre.", value: "Safe" }
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-colors group">
                  <div className="text-4xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                    {b.value === "Zap" ? <Zap className="w-8 h-8" /> : b.value}
                  </div>
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

export default BasesDeDatosPage;
