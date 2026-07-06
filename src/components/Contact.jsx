import { Computer, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="font-semibold uppercase tracking-widest text-sky-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Let’s Work Together
        </h2>

        <p className="mt-4 text-slate-400">
          Feel free to reach out for collaborations, opportunities,
          or technical discussions.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <a
          href="mailto:allanmuk.6akco@aleeas.com"
          className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
        >
          <Mail className="text-sky-400" />
          <span>Email Me</span>
        </a>

        <a
          href="https://github.com/Alan-Muk"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
        >
          <Computer className="text-sky-400" />
          <span>GitHub</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500"
        >
          <Globe className="text-sky-400" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}