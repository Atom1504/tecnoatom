import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

const steps = [
  { n: "01", title: "Descubrimiento", text: "Entendemos tu negocio, equipo y meta. Sin guion, sin plantillas." },
  { n: "02", title: "Diseño & arquitectura", text: "Definimos cómo se ve, cómo funciona y cómo va a crecer." },
  { n: "03", title: "Construcción ágil", text: "Entregamos en sprints, con builds reales que puedes probar." },
  { n: "04", title: "Lanzamiento & evolución", text: "Salimos a producción contigo y acompañamos la mejora continua." },
];

export function ProcessSteps() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de la idea al resultado"
          subtitle="Cuatro fases pensadas para que sepas siempre qué estamos haciendo, por qué y qué viene después."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 top-12 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-elegant">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;