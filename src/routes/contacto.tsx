import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { contactServiceOptions } from "@/data/services";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): { servicio?: string } => {
    const isKnownService = contactServiceOptions.some((option) => option.value === search.servicio);
    return isKnownService ? { servicio: search.servicio as string } : {};
  },
  head: () =>
    seo({
      path: "/contacto",
      title: "Contacto — TECNOATOM",
      description:
        "Hablemos de tu proyecto. Bucaramanga, Colombia. Respondemos en menos de 24 horas hábiles.",
    }),
  component: ContactoPage,
});

function ContactoPage() {
  const { servicio } = Route.useSearch();
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Empecemos a construir juntos"
        subtitle="Cuéntanos qué necesitas. Nuestro equipo te responderá en menos de 24 horas hábiles."
      />
      <ContactSection defaultService={servicio} />
    </>
  );
}
