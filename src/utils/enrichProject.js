function isFeatured(repo, category) {
  const score =
    repo.stars * 2 +
    repo.forks * 3 +
    (repo.description ? 5 : 0);

  const importantCategories = [
    "Graph Systems",
    "Data Engineering",
    "Real-Time Systems",
    "Simulation",
    "Backend Systems",
  ];

  return score > 5 || importantCategories.includes(category);
}

export function enrichProject(repo) {
  const text = `${repo.name} ${repo.description || ""}`.toLowerCase();

  let category = "Software Engineering";

  if (text.includes("graph") || text.includes("path")) {
    category = "Graph Systems";
  }

  if (text.includes("etl") || text.includes("pipeline") || text.includes("airflow")) {
    category = "Data Engineering";
  }

  if (text.includes("simulation") || text.includes("physics") || text.includes("orbital")) {
    category = "Simulation";
  }

  if (text.includes("websocket") || text.includes("real-time")) {
    category = "Real-Time Systems";
  }

  if (text.includes("api") || text.includes("backend") || text.includes("microservice")) {
    category = "Backend Systems";
  }

  let highlight = repo.description || "No description provided.";

  if (category === "Graph Systems") {
    highlight = "Graph-based system involving traversal and pathfinding.";
  }

  if (category === "Data Engineering") {
    highlight = "ETL/data pipeline system for ingestion and transformation.";
  }

  if (category === "Simulation") {
    highlight = "Mathematical or physics-based simulation system.";
  }

  if (category === "Real-Time Systems") {
    highlight = "Real-time streaming or WebSocket-based system.";
  }

  return {
    ...repo,
    meta: {
      category,
      highlight,
      featured: isFeatured(repo, category),
    },
  };
}