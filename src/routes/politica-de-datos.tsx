import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { seo } from "@/lib/seo";
import { CONTACT, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/politica-de-datos")({
  head: () =>
    seo({
      path: "/politica-de-datos",
      title: "Política de tratamiento de datos — TECNOATOM",
      description:
        "Cómo TECNOATOM recolecta, usa y protege tus datos personales conforme a la Ley 1581 de 2012.",
    }),
  component: PoliticaDeDatosPage,
});

const emailLink = (
  <a href={CONTACT.emailHref} className="font-medium text-primary underline underline-offset-2">
    {CONTACT.email}
  </a>
);

const holderRights = [
  "Conocer, actualizar y rectificar tus datos personales.",
  "Solicitar prueba de la autorización que nos otorgaste.",
  "Ser informado sobre el uso que hemos dado a tus datos.",
  "Presentar quejas ante la Superintendencia de Industria y Comercio.",
  "Revocar la autorización o solicitar la supresión de tus datos, cuando no exista un deber legal o contractual de conservarlos.",
  "Acceder de forma gratuita a tus datos personales.",
];

const purposes = [
  "Responder tu solicitud y contactarte por los medios que nos indiques.",
  "Preparar y enviar propuestas comerciales sobre los servicios que te interesan.",
  "Gestionar la relación contractual si decides trabajar con nosotros.",
  "Cumplir las obligaciones legales que nos correspondan.",
];

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PoliticaDeDatosPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de tratamiento de datos"
        subtitle="Cómo recolectamos, usamos y protegemos tus datos personales, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013."
      />
      <div className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <PolicySection title="Responsable del tratamiento">
            <p>
              {SITE_NAME}, con domicilio en {CONTACT.address}, Colombia. Correo: {emailLink}.
              Teléfono: {CONTACT.phone}.
            </p>
          </PolicySection>

          <PolicySection title="Datos que recolectamos">
            <p>
              A través del formulario de contacto recolectamos tu nombre, empresa, correo
              electrónico, teléfono, el servicio que te interesa y el contenido de tu mensaje. No
              solicitamos datos sensibles; te pedimos no incluirlos en tu mensaje.
            </p>
          </PolicySection>

          <PolicySection title="Finalidades">
            <PolicyList items={purposes} />
          </PolicySection>

          <PolicySection title="Tus derechos">
            <p>Como titular de los datos tienes derecho a:</p>
            <PolicyList items={holderRights} />
          </PolicySection>

          <PolicySection title="Cómo ejercer tus derechos">
            <p>
              Escríbenos a {emailLink} indicando tu nombre, tu solicitud y el medio por el que
              quieres recibir respuesta. Atendemos las consultas en un máximo de diez días hábiles
              y los reclamos en un máximo de quince días hábiles, en los términos de los artículos
              14 y 15 de la Ley 1581 de 2012.
            </p>
          </PolicySection>

          <PolicySection title="Proveedores">
            <p>
              Para entregarnos los mensajes del formulario usamos un proveedor de correo
              electrónico, que trata los datos por nuestra cuenta y puede hacerlo desde servidores
              ubicados fuera de Colombia.
            </p>
          </PolicySection>

          <PolicySection title="Conservación y seguridad">
            <p>
              Conservamos tus datos durante el tiempo necesario para cumplir las finalidades
              descritas y nuestras obligaciones legales, y aplicamos medidas técnicas y
              administrativas para protegerlos.
            </p>
          </PolicySection>

          <PolicySection title="Vigencia y cambios">
            <p>
              Esta política rige desde noviembre de 2026. Cualquier cambio sustancial se publicará
              en esta página.
            </p>
          </PolicySection>
        </div>
      </div>
    </>
  );
}
