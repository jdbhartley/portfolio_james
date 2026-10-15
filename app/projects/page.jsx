import { projects } from "../../lib/projects";
import { ProjectFilter } from "../components/project-filter";
import { ContactBlock } from "../components/contact-block";
import { GoArrowUpRight } from "react-icons/go";
import data from "../../data.json";
import ProjectsComponent from "./projects";
export const metadata = {
  title: "Projects",
  description:
    "James Hartley's Unity games and JavaScript/PHP projects, with source code, builds, and development notes.",
  alternates: { canonical: "/projects" },
};
export default async function ProjectsPage({ searchParams }) {
  const { customUsername } = await searchParams;
  return (
    <main id="main-content">
      <section className="wrap page-section">
        <div className="page-heading">
          <p className="eyebrow">Games & web applications</p>
          <h1>
            <span>Projects</span>
          </h1>
          <p>
            Personal projects built with Unity, C#, JavaScript, and PHP. My
            professional C# and React/TypeScript work is listed on the résumé.
          </p>
        </div>
        {customUsername ? (
          <>
            <h2 className="archive-heading">
              Public repositories: {customUsername}
            </h2>
            <ProjectsComponent username={customUsername} />
          </>
        ) : (
          <ProjectFilter projects={projects} />
        )}
        <a
          className="archive-link text-link"
          href={`https://github.com/${data.githubUsername}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          All repositories on GitHub <GoArrowUpRight />
        </a>
      </section>
      <ContactBlock />
    </main>
  );
}
