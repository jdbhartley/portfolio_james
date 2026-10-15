"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GoArrowUpRight, GoX } from "react-icons/go";
import { FaBars } from "react-icons/fa";
const links = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Experience" },
  { href: "/#about", label: "About" },
];
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link
          href="/"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label="James Hartley, home"
        >
          <span className="monogram">
            jh<span>.</span>
          </span>
          <span className="wordmark-name">James Hartley</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <GoX /> : <FaBars />}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${open ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href ||
                (link.href === "/projects" && pathname.startsWith("/projects/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav-contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Contact <GoArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
