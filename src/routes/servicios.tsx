import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () =>
    seo({
      path: "/servicios",
      title: "Servicios — TECNOATOM",
      description:
        "Servicios de desarrollo de software, consultoría TI, cloud, ciberseguridad, datos y más para empresas exigentes.",
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
      <ServicesGrid showEyebrow={false} />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
