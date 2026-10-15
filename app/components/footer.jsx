import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import data from "../../data.json";
export function Footer() {
  return (
    <footer className="site-footer wrap">
      <div>
        <Link href="/" className="footer-name">
          James Hartley<span>.</span>
        </Link>
        <p>{data.location}</p>
      </div>
      <nav aria-label="Social links">
        <a
          href={`https://github.com/${data.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <GoArrowUpRight />
        </a>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <GoArrowUpRight />
        </a>
        <a href={`mailto:${data.email}`}>
          Email <GoArrowUpRight />
        </a>
      </nav>
      <span className="copyright">
        © {new Date().getFullYear()} James Hartley
      </span>
    </footer>
  );
}
