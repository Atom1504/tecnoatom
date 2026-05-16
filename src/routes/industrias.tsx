import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2, Factory, Landmark, ShoppingBag, HeartPulse, Truck, Wheat, GraduationCap, ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/industrias")({
  head: () => ({
    meta: [
      { title: "Industrias — TECNOATOM" },
      { name: "description", content: "Soluciones tecnológicas adaptadas a las particularidades de cada industria." },
      { property: "og:title", content: "Industrias — TECNOATOM" },
      { property: "og:description", content: "Experiencia transversal en sectores exigentes." },
    ],
  }),
  component: IndustriasPage,
});

const industrias = [
  { icon: Building2, name: "Construcción", text: "ERP especializado, control de obra, presupuestos y licitación.", color: "from-primary to-primary-glow" },
  { icon: Factory, name: "Industria & Manufactura", text: "Trazabilidad, MES y automatización de procesos productivos.", color: "from-primary-glow to-accent" },
  { icon: Landmark, name: "Sector Público", text: "Plataformas para entidades estatales con cumplimiento y trazabilidad.", color: "from-accent to-primary" },
  { icon: ShoppingBag, name: "Retail & Comercio", text: "E-commerce, POS, gestión de inventario y experiencia omnicanal.", color: "from-primary to-accent" },
  { icon: HeartPulse, name: "Salud", text: "HIS, gestión clínica y plataformas para EPS e IPS.", color: "from-primary-glow to-primary" },
  { icon: Truck, name: "Logística & Transporte", text: "TMS, ruteo, tracking en tiempo real e integración con flotas.", color: "from-accent to-primary-glow" },
  { icon: Wheat, name: "Agroindustria", text: "Trazabilidad de cultivo, gestión de cosecha y comercialización.", color: "from-primary to-primary-glow" },
  { icon: GraduationCap, name: "Educación", text: "LMS, sistemas académicos y plataformas para instituciones.", color: "from-primary-glow to-accent" },
];

function IndustriasPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrias"
        title="Tecnología que entiende tu sector"
        subtitle="Hemos trabajado con empresas de industrias muy diferentes. Eso nos hace mejores en cada nueva."
      />
      <section className="py-24">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industrias.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ind.color} text-primary-foreground shadow-soft`}>
                <ind.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{ind.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{ind.text}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Conversemos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                ¿Tu industria no está en la lista?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Hemos enfrentado retos en sectores muy distintos. Lo que nos define no es la vertical —
                es la calidad con la que diseñamos y construimos.
              </p>
              <Link to="/contacto" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-primary px-7 text-sm font-semibold text-primary-foreground shadow-elegant">
                Cuéntanos tu caso <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
