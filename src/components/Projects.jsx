import useGithubRepos from "../hooks/useGithubRepos";
import { enrichProject } from "../utils/enrichProject";

export default function Projects() {
  const { repos, loading } = useGithubRepos("Alan-Muk");

  const enriched = repos.map(enrichProject);

  const featured = enriched.filter((p) => p.meta.featured);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-4xl font-bold mb-10">
        Featured Projects
      </h2>

      {loading && <p className="text-slate-400">Loading...</p>}

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-sky-500 transition"
          >
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">
                {repo.name}
              </h3>

              <span className="text-xs text-sky-400">
                {repo.meta.category}
              </span>
            </div>

            <p className="mt-3 text-slate-400">
              {repo.meta.highlight}
            </p>

            <div className="mt-4 flex gap-4 text-sm text-slate-500">
              <span>{repo.language}</span>
              <span>⭐ {repo.stars}</span>
              <span>🍴 {repo.forks}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}