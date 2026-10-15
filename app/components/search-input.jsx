import { GoArrowRight } from "react-icons/go";
export default function UserSearch({ user }) {
  return (
    <form action="/projects" className="repository-search">
      <label htmlFor="github-username" className="eyebrow">
        GitHub username
      </label>
      <div className="button-row">
        <input
          id="github-username"
          name="customUsername"
          type="text"
          defaultValue={user}
          placeholder="GitHub username"
          required
          maxLength={39}
          pattern="[a-zA-Z0-9][a-zA-Z0-9\-]{0,38}"
          autoComplete="off"
          spellCheck={false}
        />
        <button className="button button-primary" type="submit">
          Find repositories <GoArrowRight />
        </button>
      </div>
    </form>
  );
}
