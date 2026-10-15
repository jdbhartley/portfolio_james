import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoArrowLeft, GoArrowUpRight, GoArrowRight } from "react-icons/go";
import { projects } from "../../../lib/projects";
import data from "../../../data.json";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? {
        title: project.name,
        description: project.description,
        alternates: { canonical: `/projects/${slug}` },
      }
    : {};
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <main id="main-content" className="wrap page-section project-detail">
      <Link className="text-link back-link" href="/projects">
        <GoArrowLeft /> All projects
      </Link>
      <div className="page-heading">
        <p className="eyebrow">
          {project.type} / {project.status}
        </p>
        <h1>
          {project.name}
          <span>.</span>
        </h1>
        <p>{project.description}</p>
        <div className="button-row">
          {project.link && (
            <a
              className="button button-primary"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel}
              <GoArrowUpRight />
            </a>
          )}
          <a
            className="button button-outline"
            href={`https://github.com/${data.githubUsername}/${project.repository}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.repositoryLabel || "View source on GitHub"}
            <GoArrowUpRight />
          </a>
        </div>
      </div>
      {project.image && (
        <div className={`detail-image ${project.color}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1160px"
          />
        </div>
      )}
      <div className="detail-content">
        <aside>
          <p className="eyebrow">Built with</p>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="eyebrow">Project status</p>
          <p>{project.status}</p>
        </aside>
        <div>
          <h2>Overview</h2>
          <p>{project.overview}</p>
          <h2>Features</h2>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="project-note">
            <p className="eyebrow">Project status</p>
            <p>{project.note}</p>
          </div>
        </div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span className="eyebrow">Up next</span>
        <span>{next.name}</span>
        <GoArrowRight />
      </Link>
    </main>
  );
}
