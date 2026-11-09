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
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      path: "/",
      title: "TECNOATOM — Soluciones empresariales de software",
      description:
        "Empresa de software en Bucaramanga. Desarrollo a la medida, consultoría TI, cloud, ciberseguridad y Constructa ERP para construcción.",
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
      <div className="hidden sm:block">
        <MetricsBand />
      </div>
      <ProcessSteps />
      <IndustriesStrip />
      <ContactSection />
    </div>
  );
}
