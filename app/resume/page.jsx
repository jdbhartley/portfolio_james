import data from "../../data.json";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { PrintButton } from "../components/print-button";
export const metadata = {
  title: "Experience & Résumé",
  description:
    "James Hartley's experience in C# application maintenance, React/TypeScript features, installation tools, support management, and field service.",
  alternates: { canonical: "/resume" },
};
export default function ResumePage() {
  return (
    <main id="main-content" className="wrap page-section resume-page">
      <div className="page-heading">
        <p className="eyebrow">{data.resume.displayName}</p>
        <h1>
          <span>Résumé</span>
        </h1>
        <p>{data.summary}</p>
        <div className="button-row">
          <PrintButton />
          <a
            className="text-link"
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <GoArrowUpRight />
          </a>
        </div>
      </div>
      <div className="print-identity">
        <h2>{data.resume.displayName}</h2>
        <p>
          {data.email} · {data.location} · jameshartley.dev
        </p>
        <p className="print-summary">{data.summary}</p>
      </div>
      <div className="resume-layout">
        <aside>
          <section>
            <h2 className="eyebrow">Technologies</h2>
            {data.resume.skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.skills.join(" · ")}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="eyebrow">Education</h2>
            {data.resume.education.map((education) => (
              <div key={education.title} className="education-entry">
                <h3>{education.title}</h3>
                <p>{education.institution}</p>
                <p>{education.detail}</p>
              </div>
            ))}
          </section>
          <Link className="text-link" href="/timeline">
            Career timeline <GoArrowUpRight />
          </Link>
        </aside>
        <section className="resume-experience">
          <h2 className="eyebrow">Selected professional experience</h2>
          {data.resume.experience.map((job) => (
            <article id={job.id} key={`${job.role}-${job.company}`}>
              <div className="job-top">
                <span className="eyebrow">{job.company}</span>
                <span>{job.years}</span>
              </div>
              <h3>{job.role}</h3>
              {job.progression && (
                <p className="role-progression">{job.progression}</p>
              )}
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
