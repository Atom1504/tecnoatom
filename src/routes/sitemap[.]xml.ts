import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/site";


export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/servicios", "/nosotros", "/constructa", "/industrias", "/contacto", "/politica-de-datos",
          ...services.map((s) => `/servicios/${s.slug}`),
        ];
        const urls = paths.map((p) =>
          `  <url><loc>${SITE_URL}${p}</loc><changefreq>weekly</changefreq></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
