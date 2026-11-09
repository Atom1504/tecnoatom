# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Sitio corporativo de TECNOATOM (Bucaramanga, Colombia): servicios de software y el producto Constructa ERP. Todo el contenido visible está en español. Nació de una plantilla de Lovable (`.lovable/project.json`). Es una app SSR con TanStack Start, React 19, Tailwind v4 y framer-motion. No tiene base de datos ni server functions; el único endpoint propio es `POST /api/contacto`.

## Comandos

```bash
npm run dev         # servidor de desarrollo con SSR
npm run build       # build de producción en dist/
npm run build:dev   # build en modo development
npm run preview     # sirve el build; es lo que corre en producción (puerto 4173)
npm run lint        # ESLint + Prettier
npm run format      # Prettier --write
npx tsc --noEmit    # chequeo de tipos (no hay script para esto)
```

No hay test runner ni tests en el repo.

Están versionados `package-lock.json` y `bun.lock`. El Dockerfile usa `npm ci`, así que `package-lock.json` debe quedar sincronizado al cambiar dependencias. `bunfig.toml` aplica un guard de 24 h a paquetes recién publicados: confirmar con el usuario antes de añadir excepciones a `minimumReleaseAgeExcludes`.

## Arquitectura

### Configuración de Vite

`vite.config.ts` delega en `@lovable.dev/vite-tanstack-config`, que ya incluye tanstackStart, viteReact, tailwindcss, tsConfigPaths, el alias `@` y la inyección de `VITE_*`. No añadir esos plugins a mano: duplicarlos rompe la app. Cualquier configuración adicional va en `defineConfig({ vite: { ... } })`.

`cloudflare: false` es necesario: el build para Workers genera `dist/server/index.js`, pero `vite preview` (lo que corre en producción) carga `dist/server/server.js` y respondería 500 en todas las páginas. `preview.allowedHosts` también: sin él, `vite preview` rechaza con 403 las peticiones que llegan desde Caddy con el dominio real.

### Manejo de errores SSR (tres capas)

1. `src/server.ts` es el entry del servidor (`tanstackStart.server.entry` en `vite.config.ts`). h3 convierte los throws en una respuesta 500 JSON `{"unhandled":true,"message":"HTTPError"}` que un try/catch no ve, así que este wrapper la detecta y la sustituye por la página de `src/lib/error-page.ts`. `src/lib/error-capture.ts` conserva el error original para poder loguearlo.
2. `src/start.ts` registra un middleware de request que captura errores y deja pasar los que traen `statusCode`.
3. `src/routes/__root.tsx` define `errorComponent` y `notFoundComponent` para errores dentro de React.

### Rutas

Enrutado por archivos en `src/routes/`. `src/routeTree.gen.ts` lo genera el plugin del router: no editarlo a mano.

- `__root.tsx` es el shell: `<html lang="es">`, Navbar, Footer, QueryClientProvider y scroll al inicio en cada navegación. El `<main>` lleva `pt-20` para compensar la navbar fija.
- Cada ruta declara su SEO en `head()` con el helper `seo()` de `src/lib/seo.ts`, que genera title, description, Open Graph, Twitter y canonical. `src/lib/site.ts` centraliza dominio y datos de contacto.
- `servicios_.$slug.tsx` sirve `/servicios/:slug`. El `_` final evita que se anide dentro de `servicios.tsx`.
- `sitemap[.]xml.ts` es solo un handler `GET` de servidor (los corchetes escapan el punto).
- `api.contacto.ts` recibe el formulario, lo valida con zod y lo envía por la API HTTP de Resend. `/contacto?servicio=<valor>` preselecciona una opción de `contactServiceOptions`.

### Servicios

`src/data/services.ts` alimenta Navbar, Footer, `ServicesGrid`, el sitemap y la validación del slug (slug desconocido → `notFound()`).

`src/data/industries.ts` es la única lista de industrias (Inicio y `/industrias`).

El detalle de cada servicio es un componente escrito a mano en `src/components/services/`, seleccionado por un `switch` en `servicios_.$slug.tsx`. Sus textos no salen de `services.ts`, y los campos `features`, `benefits` y `processSteps` no se usan en ningún sitio.

Para añadir un servicio hay que tocar tres cosas: la entrada en `services`, el componente de página y el `case` del `switch`. Sin el `case`, la URL muestra "Servicio en construcción".

### Estilos y componentes

Tailwind v4 se configura en CSS, no hay `tailwind.config`. Tokens, utilidades propias (`container-x`, `glass`, `text-gradient`, `bg-gradient-primary`, `shadow-soft`, `shadow-elegant`...) y fuentes viven en `src/styles.css`. Tailwind solo escanea `src/` (`source(none)` + `@source "../src"`).

Las páginas se componen con `src/components/sections/` y `src/components/ui-custom/` (`Reveal`, `SectionHeading`, `ProgressBar`) más clases de Tailwind. `src/components/ui/` es shadcn (new-york), pero las páginas actuales no lo importan.

### Animaciones

El HTML del servidor debe dejar el contenido visible. `Reveal` solo oculta tras la hidratación lo que está bajo el pliegue, y los heroes usan la clase CSS `animate-fade-up`: no usar `initial={{ opacity: 0 }}` de framer-motion en contenido sobre el pliegue. `MotionConfig` y el bloque final de `styles.css` respetan `prefers-reduced-motion`.

### Despliegue

El camino documentado es Docker + Caddy (`DEPLOY_VPS.md`): `docker-compose up -d --build` compila y ejecuta `vite preview` en el puerto 4173, y Caddy hace de proxy con HTTPS automático. `wrangler.jsonc` proviene de la plantilla para Cloudflare Workers y hoy no se usa.

El formulario necesita `RESEND_API_KEY` y `CONTACT_EMAIL_FROM` (opcional `CONTACT_EMAIL_TO`), que `docker-compose.yml` toma de `.env`; ver `.env.example`. Sin ellas, `/api/contacto` responde 503 y el formulario muestra los canales alternativos. Vite no carga `.env` en `process.env`: en local hay que definirlas en la terminal.

## Limitaciones actuales

- La política de `/politica-de-datos` no incluye razón social ni NIT y requiere revisión legal.
- `src/routes/servicios_.$slug.tsx` tiene un error de tipos conocido en `Route.useLoaderData()`.
