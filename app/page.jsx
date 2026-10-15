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
            <span className="status-dot" /> C# development / Technical support
          </p>
          <h1 id="intro-title">
            James
            <br />
            <span>Hartley</span>
          </h1>
          <p className="hero-description">{data.introduction}</p>
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
          <span>C# applications / Installation tools / React features</span>
          <a href="#work">
            Projects <GoArrowDown />
          </a>
        </div>
      </section>
      <div className="stack-strip">
        <div className="wrap stack-inner">
          <span className="eyebrow">Technologies</span>
          <div>
            {data.technologies.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <section
        className="section wrap professional-work"
        aria-labelledby="professional-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Professional development</p>
            <h2 id="professional-title">Development at YAPI</h2>
          </div>
          <div className="section-intro">
            <p>
              Work on the legacy C# application, installation utilities, and the
              new React/TypeScript admin panel.
            </p>
            <Link href="/resume#yapi" className="text-link">
              YAPI experience <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="accomplishment-grid">
          {data.accomplishments.map((item) => (
            <article key={item.title}>
              <p className="eyebrow">{item.title}</p>
              <h3>{item.value}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="work" className="section wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Personal projects</p>
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
            <p className="eyebrow">03 / Experience</p>
            <h2 id="experience-title">Recent work</h2>
            <p className="section-description">
              I currently service gaming equipment at AGS. Before that, I spent
              nearly seven years at YAPI in technical support, leadership, and
              software development.
            </p>
            <Link href="/resume" className="text-link">
              View résumé <GoArrowUpRight />
            </Link>
          </div>
          <div className="experience-list">
            {data.resume.experience.slice(0, 2).map((job) => (
              <article key={job.role}>
                <div className="job-top">
                  <span className="eyebrow">{job.company}</span>
                  <span>{job.years}</span>
                </div>
                <h3>{job.role}</h3>
                <p>{job.summary}</p>
                {job.id === "yapi" && (
                  <p className="role-context">
                    Progressed through specialist and team lead roles; Onshore
                    Support Manager was my final title.
                  </p>
                )}
                <div className="tag-row">
                  {job.tags.map((tag) => (
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
          <p className="eyebrow">04 / About</p>
          <h2 id="about-title">About me</h2>
        </div>
        <div>
          <p className="about-lead">
            My background includes C# development, support leadership, and
            hands-on field service.
          </p>
          <p>
            At YAPI, I maintained the legacy C# application and built tools the
            support team used for installations. I also contributed features to
            the React/TypeScript application while managing six support agents.
          </p>
          <p>
            I earned a C++ Programming State Certificate at Riverside City
            College and studied simulations programming at the Art Institute of
            Santa Ana. My personal projects include Unity games for mobile and
            the browser.
          </p>
          <p>
            {data.sideBusiness.description}{" "}
            <a
              className="inline-link"
              href={data.sideBusiness.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.sideBusiness.name} <GoArrowUpRight />
            </a>
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
