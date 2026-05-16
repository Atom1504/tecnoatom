import { motion } from "framer-motion";
import { Rocket, Users, Shield, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

const pillars = [
  {
    icon: Rocket,
    title: "Velocidad de ejecución",
    text: "Metodologías ágiles, entregas frecuentes y resultados visibles desde la semana uno.",
  },
  {
    icon: Users,
    title: "Equipo senior",
    text: "Arquitectos, desarrolladores y consultores con experiencia real en empresas exigentes.",
  },
  {
    icon: Shield,
    title: "Calidad de software",
    text: "Pruebas, revisiones y arquitectura limpia. El código se mantiene, no se reescribe.",
  },
  {
    icon: Zap,
    title: "Impacto medible",
    text: "Cada proyecto se conecta a KPIs concretos. Si no mueve el negocio, no se entrega.",
  },
];

export function ValuePillars() {
  return (
    <section className="relative bg-surface py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="¿Por qué TECNOATOM?"
          title="Aliados estratégicos, no solo proveedores"
          subtitle="Nuestro compromiso no termina cuando el software se entrega — empieza cuando empieza a generar valor para tu empresa."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuePillars;