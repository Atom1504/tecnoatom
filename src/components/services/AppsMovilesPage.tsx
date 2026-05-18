import { Link } from "@tanstack/react-router";
import { ArrowRight, Smartphone, BellRing, Sparkles, LayoutPanelTop, Code, Play, AppWindow } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

export function AppsMovilesPage() {
  return (
    <>
      <PageHero
        eyebrow="Aplicaciones Móviles"
        title="Tu negocio, en el bolsillo de tus clientes"
        subtitle="Desarrollamos aplicaciones iOS y Android de clase mundial. Diseño espectacular, rendimiento nativo y una experiencia de usuario que genera retención y ventas."
      >
        <Link
          to="/contacto"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
        >
          Cotizar aplicación móvil <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Sección de Valor */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Propuesta de Valor"
            title="Una app mediocre daña tu marca. Nosotros hacemos apps premium."
            subtitle="El usuario moderno es exigente. Si tu aplicación es lenta o confusa, la desinstalará en segundos. Construimos experiencias que enganchan."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <AppWindow className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Problema</h3>
                <p className="text-muted-foreground flex-1">
                  Pérdida de clientes frente a competidores más digitalizados. Las webs adaptadas (responsive) no siempre logran el nivel de fidelización de una app real.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-elegant h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Smartphone className="h-32 w-32 text-primary" />
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">La Solución</h3>
                <p className="text-foreground/80 flex-1 relative z-10">
                  Aplicaciones móviles nativas (Swift, Kotlin) o híbridas modernas (React Native) con interfaces centradas en el usuario e integradas a tu núcleo de negocio.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft h-full flex flex-col">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">El Resultado</h3>
                <p className="text-muted-foreground flex-1">
                  Un canal de ventas directo, notificaciones push que atraen tráfico en segundos, y un posicionamiento de marca que transmite innovación y solidez.
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
              {/* Representación visual abstracta de un móvil */}
              <div className="relative w-[240px] h-[480px] rounded-[2.5rem] border-[6px] border-surface-2 bg-card shadow-2xl overflow-hidden shadow-primary/10 flex flex-col">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-2 rounded-b-xl z-20" />
                 
                 {/* App UI */}
                 <div className="flex-1 bg-gradient-to-b from-surface to-background pt-10 px-4 pb-4 flex flex-col gap-4 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex justify-between items-center">
                       <div>
                         <div className="w-16 h-2 rounded bg-muted-foreground/30 mb-1" />
                         <div className="w-24 h-4 rounded bg-foreground" />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                          <div className="w-8 h-8 rounded-full bg-primary/40" />
                       </div>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="w-full aspect-[4/3] rounded-2xl bg-gradient-primary shadow-elegant p-4 flex flex-col justify-between">
                       <div className="w-8 h-8 rounded-full bg-white/20" />
                       <div>
                         <div className="w-1/2 h-4 rounded bg-white/80 mb-2" />
                         <div className="w-3/4 h-2 rounded bg-white/50" />
                       </div>
                    </motion.div>
                    
                    <div className="flex gap-2">
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex-1 h-20 rounded-xl bg-surface border border-border" />
                      <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex-1 h-20 rounded-xl bg-surface border border-border" />
                    </div>
                 </div>
                 
                 {/* Bottom bar */}
                 <div className="h-16 border-t border-border bg-surface/80 backdrop-blur flex justify-around items-center px-4 z-20">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-primary" /></div>
                    <div className="w-8 h-8 rounded-full bg-foreground/10" />
                    <div className="w-8 h-8 rounded-full bg-foreground/10" />
                 </div>
                 
                 {/* Home indicator */}
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-foreground/20 z-30" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  Desarrollo de principio a fin
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  No solo escribimos código. Nos encargamos de toda la experiencia: desde el diseño visual en Figma hasta la publicación exitosa en las tiendas.
                </p>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: LayoutPanelTop, title: "Diseño UX/UI Premium", desc: "Interfaces limpias, modernas e intuitivas, probadas con usuarios reales." },
                  { icon: Code, title: "Desarrollo Nativo e Híbrido", desc: "Swift, Kotlin, y React Native. La tecnología ideal según tus necesidades." },
                  { icon: Play, title: "App Store & Play Store", desc: "Gestionamos todo el proceso de revisión, publicación y mantenimiento." },
                  { icon: Code, title: "Backend Integrado", desc: "APIs seguras y robustas para conectar tu app con tu ecosistema actual." }
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
            title="Convierte la pantalla de tu cliente en una sucursal"
            subtitle="Tener una app no es un capricho estético, es el canal de retención con el costo de adquisición (CAC) más bajo a largo plazo."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Canal Directo", text: "Envía ofertas directamente al bolsillo de tus usuarios mediante notificaciones Push.", value: <BellRing className="w-8 h-8" /> },
              { title: "Engagement", text: "Los usuarios de apps revisan sus teléfonos decenas de veces al día, aumentando tu retención.", value: "3x" },
              { title: "Prestigio de Marca", text: "Una aplicación cuidada, rápida y funcional eleva el estatus y la confianza de tu empresa.", value: "Top" },
              { title: "Datos Propios", text: "Recopila analítica detallada sobre el comportamiento de tus usuarios para tomar decisiones.", value: "Data" }
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

export default AppsMovilesPage;
