import { getRepos } from "../data";
import { GoArrowUpRight } from "react-icons/go";
// Retain the original username-search flow without fetching private analytics.
export default async function ProjectsComponent({ username }) {
  const repositories = await getRepos(username);
  const visible = repositories.filter(
    (repo) => !repo.private && !repo.fork && !repo.archived,
  );
  return (
    <div className="repository-grid">
      {visible.map((repo) => (
        <article key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <h3>
              {repo.name} <GoArrowUpRight />
            </h3>
          </a>
          <p>{repo.description || "Explore this project on GitHub."}</p>
          <span className="eyebrow">{repo.language || "Repository"}</span>
        </article>
      ))}
      {!visible.length && (
        <p>
          No public projects could be loaded. Check the username or try again
          later.
        </p>
      )}
    </div>
  );
}
