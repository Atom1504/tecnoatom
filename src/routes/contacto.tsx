import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — TECNOATOM" },
      { name: "description", content: "Hablemos de tu proyecto. Bucaramanga, Colombia. Respondemos en menos de 24 horas." },
      { property: "og:title", content: "Contacto — TECNOATOM" },
      { property: "og:description", content: "Estamos listos para escuchar tu reto." },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Empecemos a construir juntos"
        subtitle="Cuéntanos qué necesitas. Nuestro equipo te responderá en menos de 24 horas hábiles."
      />
      <ContactSection />
    </>
  ),
});
