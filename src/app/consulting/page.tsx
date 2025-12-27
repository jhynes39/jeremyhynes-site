import Link from "next/link";

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Consulting</h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        I work with teams on cloud architecture, DevOps delivery, and building
        reliable financial/billing systems. My consulting work is delivered
        through Coastonia.
      </p>

      <div className="mt-8 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-lg font-semibold">Coastonia</h2>
        <p className="mt-2 text-neutral-700">
          For service details, case studies, and formal engagement info:
        </p>
        <a
          className="mt-4 inline-flex rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          href="https://coastonia.com"
          target="_blank"
          rel="noreferrer"
        >
          Visit Coastonia.com
        </a>
      </div>

      <h2 className="mt-10 text-lg font-semibold">Typical engagements</h2>
      <ul className="mt-3 space-y-2 text-neutral-700">
        <li>• Architecture reviews and roadmap planning</li>
        <li>• DevOps and release hardening (CI/CD, Kubernetes, cloud)</li>
        <li>• Modernizing services and reducing operational risk</li>
      </ul>

      <div className="mt-10">
        <Link
          className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          href="/contact"
        >
          Contact →
        </Link>
      </div>
    </main>
  );
}
