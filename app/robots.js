import data from "../data.json";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/search"] },
    sitemap: `${data.website}/sitemap.xml`,
  };
}
