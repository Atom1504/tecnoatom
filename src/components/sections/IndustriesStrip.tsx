import { Building2, Factory, Landmark, ShoppingBag, HeartPulse, Truck, Wheat, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

const industries = [
  { icon: Building2, name: "Construcción" },
  { icon: Factory, name: "Industria" },
  { icon: Landmark, name: "Sector Público" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: HeartPulse, name: "Salud" },
  { icon: Truck, name: "Logística" },
  { icon: Wheat, name: "Agro" },
  { icon: GraduationCap, name: "Educación" },
];

export function IndustriesStrip() {
  return (
    <section className="bg-surface py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industrias"
          title="Experiencia transversal en sectores exigentes"
          subtitle="Cada industria tiene su propio idioma. Hablamos varios."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
            >
              <ind.icon className="h-7 w-7 text-primary transition group-hover:scale-110" />
              <span className="text-xs font-medium text-foreground">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesStrip;