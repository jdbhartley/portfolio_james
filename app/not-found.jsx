import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
export default function NotFound() {
  return (
    <main id="main-content" className="wrap page-section">
      <div className="page-heading">
        <p className="eyebrow">404</p>
        <h1>Page <span>not found</span></h1>
        <p>This page may have moved, or the address may be incorrect.</p>
        <div className="button-row">
          <Link href="/" className="button button-primary">
            Back home <GoArrowRight />
          </Link>
          <Link href="/projects" className="text-link">
            View projects <GoArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
