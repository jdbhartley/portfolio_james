"use client";
import { useState } from "react";
import { ProjectCard } from "./project-card";
export function ProjectFilter({ projects }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const visible = projects.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      `${project.name} ${project.description} ${project.tags.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filter-buttons" aria-label="Filter projects">
          {["All", "Games", "Web"].map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={category === filter}
              onClick={() => setCategory(filter)}
            >
              {filter}
              <span>
                {filter === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === filter).length}
              </span>
            </button>
          ))}
        </div>
        <label className="project-search">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search projects or technologies…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <p className="results-count" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <div className="projects-grid">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} headingLevel={2} />
        ))}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <h2>No projects found.</h2>
          <p>Try another keyword or choose a different category.</p>
          <button
            className="text-link"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters ↗
          </button>
        </div>
      )}
    </>
  );
}
