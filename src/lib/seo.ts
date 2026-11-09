import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from "./site";

type SeoOptions = {
  title: string;
  description: string;
  /** Omit on pages that must not declare a canonical URL, such as the 404. */
  path?: string;
};

export function seo({ title, description, path }: SeoOptions) {
  const url = path === undefined ? undefined : new URL(path, SITE_URL).href;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}
