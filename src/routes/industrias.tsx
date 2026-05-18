import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2, Factory, Scale, ShoppingBag, HeartPulse, Truck, Wheat, Wallet, ArrowRight, ShieldCheck, Zap, RefreshCw
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/industrias")({
  head: () => ({
    meta: [
      { title: "Industrias — TECNOATOM" },
      { name: "description", content: "Soluciones tecnológicas adaptadas a construcción, retail, logística, abogados y más." },
      { property: "og:title", content: "Industrias — TECNOATOM" },
      { property: "og:description", content: "Experiencia transversal en sectores exigentes." },
    ],
  }),
  component: IndustriasPage,
});

const industrias = [
  { icon: Building2, name: "Construcción", text: "ERP especializado (Constructa), control de obra, presupuestos, licitación e inventario.", color: "from-primary to-primary-glow" },
  { icon: ShoppingBag, name: "Retail & Comercio", text: "E-commerce, puntos de venta (POS), gestión de inventario inteligente y experiencia omnicanal.", color: "from-primary-glow to-accent" },
  { icon: Truck, name: "Logística & Transporte", text: "Sistemas TMS, ruteo automatizado, tracking en tiempo real e integración con flotas vehiculares.", color: "from-accent to-primary" },
  { icon: Scale, name: "Firmas de Abogados", text: "Gestión de expedientes, automatización de documentos legales, facturación y portal de clientes.", color: "from-primary to-accent" },
  { icon: HeartPulse, name: "Salud & Clínicas", text: "Sistemas HIS, historias clínicas digitales y plataformas de agendamiento para EPS e IPS.", color: "from-primary-glow to-primary" },
  { icon: Wallet, name: "Finanzas & Seguros", text: "Pasarelas de pago, core bancario, gestión de pólizas y automatización de procesos financieros.", color: "from-accent to-primary-glow" },
  { icon: Factory, name: "Industria & Manufactura", text: "Trazabilidad de producción, sistemas MES, control de calidad y automatización IoT.", color: "from-primary to-primary-glow" },
  { icon: Wheat, name: "Agroindustria", text: "Trazabilidad de cultivo desde la siembra, gestión de cosecha y comercialización B2B.", color: "from-primary-glow to-accent" },
];

function IndustriasPage() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("formulario-contacto");
    if (element) {
      // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
            {industrias.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-elegant"
              >
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
              </motion.div>
            ))}
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
              { icon: Zap, title: "Escalabilidad asegurada", text: "Infraestructura 100% Cloud Nativa. Si tu comercio tiene un pico masivo de ventas, el sistema crecerá automáticamente para soportarlo." },
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
