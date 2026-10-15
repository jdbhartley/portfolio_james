import data from "../data.json";
import { projects } from "../lib/projects";
export default function sitemap() {
  return [
    "",
    "/projects",
    "/resume",
    "/timeline",
    "/contact",
    ...projects.map((project) => `/projects/${project.slug}`),
  ].map((path) => ({
    url: `${data.website}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
