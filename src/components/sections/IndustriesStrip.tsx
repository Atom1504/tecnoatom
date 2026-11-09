import { Reveal } from "@/components/ui-custom/Reveal";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { industries } from "@/data/industries";

export function IndustriesStrip() {
  return (
    <section className="bg-surface py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industrias"
          title="Experiencia transversal en sectores exigentes"
          subtitle="Cada industria tiene su propio idioma. Hablamos varios."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {industries.map((industry, i) => (
            <Reveal
              key={industry.name}
              delay={i * 0.04}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
            >
              <industry.icon className="h-7 w-7 text-primary transition group-hover:scale-110" />
              <span className="text-xs font-medium text-foreground">{industry.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesStrip;
