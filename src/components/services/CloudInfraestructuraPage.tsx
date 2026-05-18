import { Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Server, Shield, DollarSign, Activity, HardDrive, Cpu, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function CloudInfraestructuraPage() {
  return (
    <>
      <PageHero
        eyebrow="Cloud & Infraestructura"
        title="Infraestructura escalable y siempre disponible"
        subtitle="Diseñamos, migramos y operamos entornos cloud de alto rendimiento. Paga solo por lo que consumes mientras garantizas que tu operación nunca se detenga."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Evaluar infraestructura <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="Del servidor físico a la agilidad del Cloud"
            subtitle="Mantenemos tu plataforma rápida, segura y resiliente frente a picos de tráfico inesperados, sin que tengas que gestionar fierros."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema</h3>
                <p className="text-muted-foreground flex-1">
                  Mantenimiento de servidores on-premise costosos, caídas de sistema en momentos pico y facturas de nube infladas por recursos mal configurados.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Cloud className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Cloud className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Arquitectura cloud nativa (AWS, Azure, GCP). Sistemas elásticos que crecen cuando los necesitas y se reducen cuando no, automatizando el despliegue mediante prácticas DevOps.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Resultado</h3>
                <p className="text-muted-foreground flex-1">
                  Tranquilidad operativa. Tu plataforma es tolerante a fallos, está respaldada ante desastres y los costos están estrictamente monitoreados y optimizados.
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
                  Arquitectura Cloud de Nivel Enterprise
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Implementamos soluciones modernas desde Serverless hasta orquestación de contenedores con Kubernetes, siempre priorizando la seguridad y eficiencia.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Cloud, title: "Migración Cloud", desc: "Estrategias Lift & Shift o refactorización a nube nativa." },
                  { icon: Settings, title: "DevOps & CI/CD", desc: "Automatización de despliegues rápidos y seguros." },
                  { icon: Cpu, title: "Serverless & K8s", desc: "Arquitecturas elásticas basadas en microservicios." },
                  { icon: HardDrive, title: "Disaster Recovery", desc: "Políticas de backup y recuperación ante desastres." }
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
              {/* Representación visual abstracta de infraestructura */}
              <div className="relative w-full max-w-md grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="col-span-2 h-16 rounded-xl border border-border bg-surface shadow-sm flex items-center justify-between px-6">
                   <div className="w-24 h-3 bg-foreground/20 rounded" />
                   <div className="flex gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-full" /><div className="w-3 h-3 bg-emerald-500 rounded-full" /></div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="h-32 rounded-xl border border-border bg-gradient-to-br from-surface to-surface-2 shadow-sm p-4 flex flex-col justify-end gap-2 relative overflow-hidden">
                   <Cloud className="absolute -top-4 -right-4 w-20 h-20 text-primary/10" />
                   <div className="w-16 h-2 bg-foreground/20 rounded" />
                   <div className="w-1/2 h-2 bg-primary/40 rounded" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-32 rounded-xl border border-border bg-gradient-to-bl from-surface to-surface-2 shadow-sm p-4 flex flex-col justify-end gap-2 relative overflow-hidden">
                   <Server className="absolute -top-4 -right-4 w-20 h-20 text-primary/10" />
                   <div className="w-16 h-2 bg-foreground/20 rounded" />
                   <div className="w-3/4 h-2 bg-primary/40 rounded" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="col-span-2 h-12 rounded-xl border border-border bg-surface shadow-sm flex items-center px-4">
                   <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-gradient-primary" />
                   </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Orientada a Negocio */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            title="FinOps y Eficiencia Operativa"
            subtitle="Pasar a la nube no significa gastar más, significa gastar mejor. Maximizamos el rendimiento reduciendo los costos fijos."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Optimización FinOps", text: "Auditamos tu facturación actual y eliminamos recursos zombis y sobredimensionados.", value: "-30%" },
              { title: "Alta Disponibilidad", text: "Arquitectura tolerante a fallos para que tu negocio siga facturando pase lo que pase.", value: "99.9%" },
              { title: "Elasticidad Real", text: "Tu plataforma se adapta en segundos a campañas masivas de marketing o Black Friday.", value: "Auto" },
              { title: "Time to Market", text: "Con CI/CD, tu equipo lanza nuevas funcionalidades en minutos, no en meses.", value: "⚡" }
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

export default CloudInfraestructuraPage;
