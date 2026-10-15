import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../../data.json";
import { CopyEmail } from "../components/copy-email";
export const metadata = {
  title: "Get in Touch",
  description:
    "Get in touch with James Hartley about software engineering opportunities, projects, and ideas.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <main id="main-content" className="wrap page-section contact-page">
      <div className="page-heading">
        <p className="eyebrow">
          <span className="status-dot" /> James Hartley
        </p>
        <h1><span>Contact</span></h1>
        <p>
          Email me about software roles or projects, or message me on LinkedIn.
        </p>
      </div>
      <div className="contact-email">
        <span className="eyebrow">Email me directly</span>
        <a href={`mailto:${data.email}`}>
          {data.email} <GoArrowUpRight />
        </a>
        <CopyEmail />
      </div>
      <div className="contact-options">
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <div>
            <h2>LinkedIn</h2>
            <p>linkedin.com/in/jdbhartley</p>
          </div>
          <GoArrowUpRight />
        </a>
        <a
          href={`https://github.com/${data.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <div>
            <h2>GitHub</h2>
            <p>github.com/jdbhartley</p>
          </div>
          <GoArrowUpRight />
        </a>
      </div>
      <p className="contact-location">
        Based in {data.location} <span> / </span> Pacific time
      </p>
    </main>
  );
}
