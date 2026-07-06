import { useEffect, useState } from "react";

export default function useGithubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );

        const data = await res.json();

        const cleaned = data
          .filter((r) => !r.fork && r.name !== username)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            description: repo.description,
            url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            topics: repo.topics || [],
            updated: repo.updated_at,
            created: repo.created_at,
          }));

        setRepos(cleaned);
      } catch (err) {
        console.error("GitHub fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { repos, loading };
}