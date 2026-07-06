import { ArrowRight, Download, Computer, Globe, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24"
    >
      <div className="grid w-full gap-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-sky-400">
            Software Engineer
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Hi, I'm
            <span className="block text-sky-400">
              Allan Mukabana
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-300">
            I build scalable backend systems, distributed applications,
            and modern full-stack web experiences using TypeScript,
            Java, Python, Go, React, and Node.js.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold transition hover:bg-sky-400"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 transition hover:border-sky-400"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-slate-400">
            <a href="https://github.com/Alan-Muk">
              <Computer className="transition hover:text-sky-400" />
            </a>

            <a href="#">
              <Globe className="transition hover:text-sky-400" />
            </a>

            <a href="mailto:allanmuk.6akco@aleeas.com">
              <Mail className="transition hover:text-sky-400" />
            </a>
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <div className="mb-6 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <pre className="overflow-x-auto text-sm text-slate-300">
{`const engineer = {
  name: "Allan Mukabana",
  role: "Software Engineer",
  backend: [
    "Node.js",
    "Spring Boot",
    "Flask",
    "Go"
  ],
  frontend: [
    "React",
    "TypeScript"
  ],
  interests: [
    "Distributed Systems",
    "Graph Algorithms",
    "ETL",
    "System Design"
  ]
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}