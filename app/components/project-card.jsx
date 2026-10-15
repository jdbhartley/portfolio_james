import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight, GoCode } from "react-icons/go";
export function ProjectCard({ project, index = 0, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className={`project-image ${project.color || "green"}`}
        aria-label={`Explore ${project.name}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        ) : (
          <div className="code-art" aria-hidden="true">
            <GoCode />
            <span>{project.name}</span>
            <small>{project.tags.join(" / ")}</small>
          </div>
        )}
        <span className="image-index">
          0{index + 1} / {project.category}
        </span>
        <span className="project-open">
          <GoArrowUpRight />
        </span>
      </Link>
      <div className="project-meta">
        <span className="eyebrow">{project.type}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <Link href={`/projects/${project.slug}`} className="project-title">
        <Heading>{project.name}</Heading>
        <GoArrowUpRight />
      </Link>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
