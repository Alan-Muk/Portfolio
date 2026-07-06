import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-16">
        <p className="font-semibold uppercase tracking-widest text-sky-400">
          Experience
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Professional Journey
        </h2>
      </div>

      <div className="relative border-l border-slate-800">
        {experience.map((job) => (
          <div
            key={job.company}
            className="relative mb-16 ml-8"
          >
            <span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500">
              <Briefcase size={16} />
            </span>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-semibold">
                {job.role}
              </h3>

              <p className="mt-1 text-sky-400">
                {job.company}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {job.period} • {job.location}
              </p>

              <ul className="mt-6 space-y-3 text-slate-300">
                {job.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}