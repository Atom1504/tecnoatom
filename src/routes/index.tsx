import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ConstructaTeaser } from "@/components/sections/ConstructaTeaser";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TECNOATOM — Soluciones Empresariales de Software" },
      {
        name: "description",
        content:
          "Empresa de software en Bucaramanga. Desarrollo a la medida, consultoría TI, cloud, ciberseguridad y Constructa ERP para construcción.",
      },
      { property: "og:title", content: "TECNOATOM — Soluciones Empresariales" },
      {
        property: "og:description",
        content:
          "Soluciones empresariales y Constructa ERP para empresas de construcción de licitación.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="-mt-20">
      <Hero />
      <ClientsMarquee />
      <ServicesGrid limit={6} />
      <ValuePillars />
      <ConstructaTeaser />
      <MetricsBand />
      <ProcessSteps />
      <IndustriesStrip />
      <ContactSection />
    </div>
  );
}
