import { Rocket, Users, Shield, Zap } from "lucide-react";
import { Reveal } from "@/components/ui-custom/Reveal";
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
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="¿Por qué TECNOATOM?"
            title="Aliados estratégicos, no solo proveedores"
            subtitle="Nuestro compromiso no termina cuando el software se entrega — empieza cuando empieza a generar valor para tu empresa."
          />
        </div>
        <ul className="divide-y divide-border lg:col-span-7">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.07} className="flex gap-5 py-6 first:pt-0 last:pb-0">
              <p.icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{p.title}</h3>
                <p className="mt-1.5 text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ValuePillars;
