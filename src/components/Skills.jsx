import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-16">
        <p className="font-semibold uppercase tracking-widest text-sky-400">
          Skills
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Technical Toolkit
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
          >
            <h3 className="mb-6 text-xl font-semibold">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm transition hover:bg-sky-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}