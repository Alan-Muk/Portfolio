export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-semibold uppercase tracking-widest text-sky-400">
          About
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Who I Am
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-8 text-slate-300">
        <p>
          I'm a software engineer focused on backend systems,
          distributed applications, and data-intensive platforms.
          I enjoy building scalable APIs, designing clean architectures,
          and working on systems that handle real-world complexity.
        </p>

        <p>
          My experience spans full-stack development with React and Node.js,
          backend services in Java, Python, and Go, ETL pipelines,
          graph-based systems, and real-time applications.
        </p>

        <p>
          I care about software craftsmanship, performance, and maintainability,
          and I enjoy working in collaborative engineering environments where
          systems are designed to scale and evolve.
        </p>
      </div>
    </section>
  );
}