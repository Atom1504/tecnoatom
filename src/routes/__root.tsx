import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { seo } from "@/lib/seo";
import { CONTACT, OG_IMAGE_URL, SITE_NAME, SITE_URL } from "@/lib/site";

const DEFAULT_DESCRIPTION =
  "Desarrollo de software, consultoría TI, cloud, ciberseguridad y Constructa ERP para la industria de la construcción. Bucaramanga, Colombia.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organizacion`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: OG_IMAGE_URL,
  description: DEFAULT_DESCRIPTION,
  telephone: "+573142671185",
  email: CONTACT.email,
  sameAs: [CONTACT.instagramHref],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl 36 #27-71, Mejoras Públicas",
    addressLocality: "Bucaramanga",
    addressRegion: "Santander",
    addressCountry: "CO",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

// Framer Motion renders its initial state inline, which would stay hidden without JavaScript.
const NO_SCRIPT_CSS =
  '[style*="opacity:0"]{opacity:1!important}[style*="transform:"]{transform:none!important}[style*="clip-path"]{clip-path:none!important}';

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Intenta nuevamente.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: SITE_NAME },
      ...seo({
        title: "TECNOATOM — Soluciones empresariales de software",
        description: DEFAULT_DESCRIPTION,
      }).meta,
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationJsonLd) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NO_SCRIPT_CSS }} />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen pt-20">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </MotionConfig>
    </QueryClientProvider>
  );
}
