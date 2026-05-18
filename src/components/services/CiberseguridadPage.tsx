import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Lock, AlertTriangle, FileWarning, Eye, FileKey, ShieldAlert, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function CiberseguridadPage() {
  return (
    <>
      <PageHero
        eyebrow="Ciberseguridad Empresarial"
        title="Blindaje tecnológico frente a amenazas reales"
        subtitle="Detectamos vulnerabilidades críticas antes que los ciberdelincuentes. Protege la reputación de tu empresa, evita multas millonarias y asegura la continuidad de tu negocio."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Solicitar auditoría de seguridad <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="Una brecha de seguridad cuesta más que prevenirla"
            subtitle="Las defensas perimetrales tradicionales ya no son suficientes. Abordamos la seguridad desde el código hasta la capa de red."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Riesgo</h3>
                <p className="text-muted-foreground flex-1">
                  Ransomware, filtración de datos de clientes y ataques dirigidos que paralizan la operación, destruyendo años de confianza y reputación.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <ShieldCheck className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Defensa</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Hacking ético (Pentesting), endurecimiento de servidores (Hardening) y monitoreo proactivo para parchear vulnerabilidades antes de que sean explotadas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Garantía</h3>
                <p className="text-muted-foreground flex-1">
                  Cumplimiento de estándares internacionales (ISO 27001, SOC2, PCI-DSS) y respuesta a incidentes lista para actuar en cualquier momento.
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
              <div className="absolute inset-0 bg-gradient-radial from-red-500/5 to-transparent opacity-50" />
              {/* Representación visual abstracta de seguridad */}
              <div className="relative w-full max-w-md">
                <div className="relative mx-auto w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-t border-primary opacity-50"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border-b border-primary/40 opacity-50"
                  />
                  <div className="w-24 h-24 rounded-full bg-gradient-primary/20 flex items-center justify-center blur-sm absolute" />
                  <Lock className="w-12 h-12 text-primary relative z-10" />
                </div>
                
                <div className="mt-8 flex justify-between gap-4">
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex-1 bg-surface border border-border rounded-lg p-3 text-center">
                     <FileWarning className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                     <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Análisis</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex-1 bg-surface border border-primary/30 rounded-lg p-3 text-center shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                     <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-1" />
                     <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Mitigación</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex-1 bg-surface border border-border rounded-lg p-3 text-center">
                     <Eye className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                     <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Monitoreo</div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  Servicios de seguridad ofensiva y defensiva
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nuestros expertos actúan como atacantes para descubrir tus puntos débiles, y como arquitectos para construir defensas impenetrables.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldAlert, title: "Pentesting", desc: "Pruebas de penetración controladas a tus redes y apps." },
                  { icon: Lock, title: "Hardening", desc: "Endurecimiento de servidores, APIs y bases de datos." },
                  { icon: FileKey, title: "Políticas y Compliance", desc: "Adecuación a normativas (GDPR, PCI, ISO)." },
                  { icon: Fingerprint, title: "Gestión de Identidades", desc: "Implementación de Zero Trust y MFA corporativo." }
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
            title="La seguridad es una inversión rentable"
            subtitle="El costo de recuperar el prestigio y la confianza de los clientes después de un ciberataque supera con creces cualquier inversión preventiva."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Continuidad del Negocio", text: "Garantizamos que tu operación siga facturando sin interrupciones por ataques DDoS o Ransomware.", value: "24/7" },
              { title: "Cero Multas", text: "Evita sanciones millonarias por incumplimiento de normativas de protección de datos de clientes.", value: "$0" },
              { title: "Confianza de Clientes", text: "Demuestra a tus socios corporativos que sus datos están blindados bajo estrictos estándares.", value: "Trust" },
              { title: "Respuesta Rápida", text: "Protocolos de contención que aíslan amenazas en minutos en caso de incidentes críticos.", value: "SLA" }
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

export default CiberseguridadPage;
