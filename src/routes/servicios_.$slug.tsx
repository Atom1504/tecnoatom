import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getServiceBySlug } from "@/data/services";

// Importación de las nuevas páginas de servicio individuales
import { DesarrolloSoftwarePage } from "@/components/services/DesarrolloSoftwarePage";
import { ConsultoriaTIPage } from "@/components/services/ConsultoriaTIPage";
import { CloudInfraestructuraPage } from "@/components/services/CloudInfraestructuraPage";
import { CiberseguridadPage } from "@/components/services/CiberseguridadPage";
import { AutomatizacionProcesosPage } from "@/components/services/AutomatizacionProcesosPage";
import { DatosAnaliticaPage } from "@/components/services/DatosAnaliticaPage";
import { BasesDeDatosPage } from "@/components/services/BasesDeDatosPage";
import { AppsMovilesPage } from "@/components/services/AppsMovilesPage";

export const Route = createFileRoute("/servicios_/$slug")({
  head: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Servicio"} — TECNOATOM` },
        { name: "description", content: s?.short ?? "Servicio profesional TECNOATOM." },
        { property: "og:title", content: `${s?.title ?? "Servicio"} — TECNOATOM` },
        { property: "og:description", content: s?.short ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Servicio no encontrado</h1>
      <Link to="/servicios" className="mt-6 inline-flex text-primary underline">Ver todos los servicios</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x py-32 text-center text-sm text-muted-foreground">
      {error.message}
    </div>
  ),
});

function ServicePage() {
  const { slug } = Route.useLoaderData();

  switch (slug) {
    case "desarrollo-software":
      return <DesarrolloSoftwarePage />;
    case "consultoria-ti":
      return <ConsultoriaTIPage />;
    case "cloud-infraestructura":
      return <CloudInfraestructuraPage />;
    case "ciberseguridad":
      return <CiberseguridadPage />;
    case "automatizacion-procesos":
      return <AutomatizacionProcesosPage />;
    case "datos-analitica":
      return <DatosAnaliticaPage />;
    case "bases-de-datos":
      return <BasesDeDatosPage />;
    case "apps-moviles":
      return <AppsMovilesPage />;
    default:
      return (
        <div className="container-x py-32 text-center">
          <h1 className="text-3xl font-semibold">Servicio en construcción</h1>
          <Link to="/servicios" className="mt-6 inline-flex text-primary underline">Volver a servicios</Link>
        </div>
      );
  }
}
