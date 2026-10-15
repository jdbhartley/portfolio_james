import UserSearch from "../components/search-input";
import data from "../../data.json";
export const metadata = {
  title: "Repository Browser",
  robots: { index: false, follow: false },
  alternates: { canonical: "/search" },
};
export default function SearchPage() {
  return (
    <main id="main-content" className="wrap page-section">
      <div className="page-heading">
        <p className="eyebrow">GitHub</p>
        <h1>Repository <span>browser</span></h1>
        <p>Look up public, original repositories for a GitHub username.</p>
      </div>
      <UserSearch user={data.githubUsername} />
    </main>
  );
}
