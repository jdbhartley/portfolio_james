import data from "../../data.json";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
export const metadata = {
  title: "Career Timeline",
  description:
    "James Hartley's education and work history in software development, technical support, and field service.",
  alternates: { canonical: "/timeline" },
};
export default function TimelinePage() {
  return (
    <main id="main-content" className="wrap page-section">
      <div className="page-heading">
        <p className="eyebrow">Education & work history</p>
        <h1>Career <span>timeline</span></h1>
        <p>
          My roles in technical support, team leadership, and software development,
          along with education and certifications.
        </p>
        <Link className="text-link" href="/resume">
          View the résumé <GoArrowUpRight />
        </Link>
      </div>
      <div className="career-timeline">
        {data.timeline.map((item, index) => (
          <article key={`${item.date}-${item.title}`}>
            <time>{item.date}</time>
            <span className={`timeline-dot ${index === 0 ? "current" : ""}`} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
