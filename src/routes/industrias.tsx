import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, RefreshCw } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ContactSection } from "@/components/sections/ContactSection";
import { industries } from "@/data/industries";
import { prefersReducedMotion } from "@/lib/motion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industrias")({
  head: () =>
    seo({
      path: "/industrias",
      title: "Industrias — TECNOATOM",
      description:
        "Soluciones tecnológicas adaptadas a construcción, sector público, retail, logística, salud, educación y más.",
    }),
  component: IndustriasPage,
});

function IndustriasPage() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("formulario-contacto");
    if (element) {
      // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Industrias"
        title="Tecnología que entiende tu sector"
        subtitle="No creemos en las soluciones genéricas. Cada industria tiene retos únicos, y nuestro software se adapta exactamente a cómo opera tu negocio."
      />
      
      {/* Grid de Industrias */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" aria-hidden />
        <div className="container-x relative z-10">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.05} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${ind.color} text-white shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{ind.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">{ind.text}</p>
                <a 
                  href="#formulario-contacto"
                  onClick={scrollToForm}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
                >
                  Conversemos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            ))}
            <a
              href="#formulario-contacto"
              onClick={scrollToForm}
              className="group relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-elegant sm:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
              <div className="relative">
                <h3 className="text-xl font-bold tracking-tight">¿Otro sector?</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Cuéntanos cómo opera tu negocio y vemos juntos cómo ayudarte.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Conversemos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Por qué nosotros */}
      <section className="bg-surface py-24 sm:py-32 relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container-x">
          <SectionHeading 
            eyebrow="Nuestra filosofía" 
            title="Software a la medida del problema" 
            subtitle="¿Por qué conformarse con sistemas empaquetados que te obligan a cambiar tus procesos? Nosotros adaptamos la tecnología a ti." 
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Cumplimiento normativo", text: "Sabemos que sectores como el legal y salud requieren estándares estrictos de seguridad y privacidad. Diseñamos con eso en mente." },
              { icon: RefreshCw, title: "Integración perfecta", text: "No reemplazamos lo que ya funciona. Nos conectamos con tu ERP, facturación electrónica o sistemas legacy sin fricción." },
              { icon: Zap, title: "Escalabilidad asegurada", text: "Infraestructura 100% cloud nativa. Si tu comercio tiene un pico masivo de ventas, el sistema crecerá automáticamente para soportarlo." },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-[2rem] bg-card p-10 border border-border shadow-soft text-center group hover:border-primary/20 transition-colors duration-300">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                    <b.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto integrado */}
      <div id="formulario-contacto" className="bg-background pt-12 sm:pt-16">
        <Reveal>
          <div className="text-center px-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              ¿No ves tu industria aquí?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hemos enfrentado retos en sectores muy distintos. Lo que nos define no es la vertical, es la calidad de nuestras soluciones.
            </p>
          </div>
        </Reveal>
        <ContactSection />
      </div>
    </>
  );
}
