import Link from "next/link";
import { GoArrowDown, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import data from "../data.json";
import { projects } from "../lib/projects";
import { ProjectCard } from "./components/project-card";
import { SystemSketch } from "./components/system-sketch";
import { ContactBlock } from "./components/contact-block";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero wrap" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Software developer
          </p>
          <h1 id="intro-title">
            James
            <br />
            <span>Hartley</span>
          </h1>
          <p className="hero-description">
            I work with C#/.NET, React, TypeScript, and PostgreSQL. My background
            includes application development, internal tools, and technical
            support. I also make games in Unity.
          </p>
          <div className="button-row">
            <a href="#work" className="button button-primary">
              View projects <GoArrowDown />
            </a>
            <Link href="/resume" className="text-link">
              View résumé <GoArrowUpRight />
            </Link>
          </div>
          <p className="hero-location">
            <span className="location-mark">↗</span> {data.location}
          </p>
        </div>
        <SystemSketch />
        <div className="hero-bottom">
          <span>Full-stack development / Internal tools / Unity games</span>
          <a href="#work">
            Projects <GoArrowDown />
          </a>
        </div>
      </section>
      <div className="stack-strip">
        <div className="wrap stack-inner">
          <span className="eyebrow">Technologies</span>
          <div>
            {["C#", ".NET", "TypeScript", "React", "PostgreSQL", "Unity"].map(
              (skill) => (
                <span key={skill}>{skill}</span>
              ),
            )}
          </div>
        </div>
      </div>
      <section id="work" className="section wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Projects</p>
            <h2 id="work-title">Games & web projects</h2>
          </div>
          <div className="section-intro">
            <p>
              Unity games and earlier JavaScript/PHP projects. Each project
              includes source code or builds, screenshots, and development notes
              where available.
            </p>
            <Link className="text-link" href="/projects">
              All projects <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <Link href="/projects/tafl" className="project-teaser">
          <span className="eyebrow">Another project</span>
          <span>
            Tafl: A King Pass{" "}
            <small>Unity adaptation of the Viking board game Hnefatafl</small>
          </span>
          <GoArrowUpRight />
        </Link>
      </section>
      <section className="experience-band" aria-labelledby="experience-title">
        <div className="section wrap experience-layout">
          <div>
            <p className="eyebrow">02 / Experience</p>
            <h2 id="experience-title">Work at YAPI</h2>
            <p className="section-description">
              I worked on C#/.NET applications, built internal tools, and led a
              seven-person technical support team.
            </p>
            <Link href="/resume" className="text-link">
              View résumé <GoArrowUpRight />
            </Link>
          </div>
          <div className="experience-list">
            {data.resume.experience.slice(0, 2).map((job, i) => (
              <article key={job.role}>
                <div className="job-top">
                  <span className="eyebrow">{job.company}</span>
                  <span>{job.years}</span>
                </div>
                <h3>{job.role}</h3>
                <p>
                  {i === 0
                    ? "Maintained core C# systems and shipped backend services and frontend features with .NET, PostgreSQL, React, and TypeScript."
                    : "Led and mentored a seven-person support team, and built internal tools to make incident resolution more consistent."}
                </p>
                <div className="tag-row">
                  {(i === 0
                    ? ["Full-stack development", "Legacy systems"]
                    : ["Team leadership", "Internal tooling"]
                  ).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="section wrap about-layout"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">03 / About</p>
          <h2 id="about-title">About me</h2>
        </div>
        <div>
          <p className="about-lead">
            I moved from technical support into software development at YAPI.
          </p>
          <p>
            My work has included maintaining legacy C# applications, building
            backend services, and adding features in React and TypeScript.
            Before that, I worked in technical consulting and field service.
          </p>
          <p>
            I studied simulations programming at The Art Institute. My personal
            projects include Unity games for mobile and the browser.
          </p>
          <Link className="text-link" href="/timeline">
            Career timeline <GoArrowUpRight />
          </Link>
        </div>
      </section>
      <ContactBlock />
    </main>
  );
}
