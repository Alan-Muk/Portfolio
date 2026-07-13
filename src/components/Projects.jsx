import { Link } from "react-router-dom";

import useGithubRepos from "../hooks/useGithubRepos";
import { enrichProject } from "../utils/enrichProject";


export default function Projects() {

  const {
    repos,
    loading,
  } = useGithubRepos(
    "Alan-Muk"
  );


  const enriched =
    repos.map(enrichProject);


  const featured =
    enriched.filter(
      (project) =>
        project.meta.featured
    );


  return (
    <section
      id="projects"
      className="
        mx-auto
        max-w-7xl
        px-6
        py-24
      "
    >

      <h2
        className="
          mb-10
          text-4xl
          font-bold
        "
      >
        Featured Projects
      </h2>


      {
        loading &&
        (
          <p className="text-slate-400">
            Loading projects...
          </p>
        )
      }


      <div
        className="
          grid
          gap-6
          md:grid-cols-2
        "
      >

        {
          featured.map(
            (repo) => (

              <Link
                key={repo.id}
                to={`/projects/Alan-Muk/${repo.name}`}
                className="
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-6
                  transition
                  hover:border-sky-500
                  hover:-translate-y-1
                "
              >

                <div
                  className="
                    flex
                    justify-between
                  "
                >

                  <h3
                    className="
                      text-xl
                      font-semibold
                    "
                  >
                    {repo.name}
                  </h3>


                  <span
                    className="
                      text-xs
                      text-sky-400
                    "
                  >
                    {repo.meta.category}
                  </span>

                </div>


                <p
                  className="
                    mt-3
                    text-slate-400
                  "
                >
                  {repo.meta.highlight}
                </p>


                <div
                  className="
                    mt-5
                    flex
                    gap-4
                    text-sm
                    text-slate-500
                  "
                >
                  <span>
                    {repo.language}
                  </span>

                  <span>
                    ⭐ {repo.stars}
                  </span>

                  <span>
                    🍴 {repo.forks}
                  </span>
                </div>

              </Link>

            )
          )
        }

      </div>

    </section>
  );
}