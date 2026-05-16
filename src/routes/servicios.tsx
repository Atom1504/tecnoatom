import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { CTASection } from "@/components/sections/CTASection";
import { ValuePillars } from "@/components/sections/ValuePillars";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — TECNOATOM" },
      { name: "description", content: "Servicios de desarrollo de software, consultoría TI, cloud, ciberseguridad, datos y más para empresas exigentes." },
      { property: "og:title", content: "Servicios — TECNOATOM" },
      { property: "og:description", content: "Catálogo de servicios profesionales en software empresarial." },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones para cada etapa de tu transformación"
        subtitle="Desde la primera línea de código hasta el dashboard de la junta directiva — tenemos un servicio pensado para cada momento."
      />
      <ServicesGrid />
      <ValuePillars />
      <ProcessSteps />
      <MetricsBand />
      <IndustriesStrip />
      <CTASection />
    </>
  );
}
