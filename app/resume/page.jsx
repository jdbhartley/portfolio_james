import data from "../../data.json";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { PrintButton } from "../components/print-button";
export const metadata = {
  title: "Experience & Résumé",
  description:
    "James Hartley's experience in C#/.NET development, React, TypeScript, technical support leadership, and internal tooling.",
  alternates: { canonical: "/resume" },
};
export default function ResumePage() {
  return (
    <main id="main-content" className="wrap page-section resume-page">
      <div className="page-heading">
        <p className="eyebrow">James Hartley / Software developer</p>
        <h1><span>Résumé</span></h1>
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
        <h2>{data.displayName}</h2>
        <p>
          {data.email} · {data.location} · jameshartley.dev
        </p>
      </div>
      <div className="resume-layout">
        <aside>
          <section>
            <h2 className="eyebrow">Technologies</h2>
            <div className="tag-row">
              {data.resume.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="eyebrow">Education</h2>
            {data.resume.education.map((education) => (
              <p key={education}>{education}</p>
            ))}
          </section>
          <Link className="text-link" href="/timeline">
            Career timeline <GoArrowUpRight />
          </Link>
        </aside>
        <section className="resume-experience">
          <h2 className="eyebrow">Professional experience</h2>
          {data.resume.experience.map((job) => (
            <article key={`${job.role}-${job.company}`}>
              <div className="job-top">
                <span className="eyebrow">{job.company}</span>
                <span>{job.years}</span>
              </div>
              <h3>{job.role}</h3>
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
