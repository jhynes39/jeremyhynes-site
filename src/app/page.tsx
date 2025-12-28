import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="space-y-6">
        <p className="text-sm text-neutral-500">jeremyhynes.com</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Jeremy Hynes
        </h1>
        <p className="max-w-2xl text-lg text-neutral-700">
          Architect • Builder • Consultant. I help teams design and ship reliable
          cloud systems, and I build practical software products—starting with
          personal finance tools.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            href="/consulting"
          >
            Consulting
          </Link>
          <Link
            className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            href="/apps"
          >
            Apps
          </Link>
        </div>
      </header>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <Card
          title="Consulting"
          desc="Cloud architecture, DevOps, and billing/financial platform work through Coastonia."
          cta="Learn more"
          href="/consulting"
        />
        <Card
          title="Apps"
          desc="Budget app in progress, plus tools for statement ingestion and spend tracking."
          cta="View apps"
          href="/apps"
        />
        <Card
          title="Writing & workshop"
          desc="Children’s stories, Christian writing, and small wood/steel projects (coming soon)."
          cta="See roadmap"
          href="/roadmap"
        />
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-lg font-semibold">What’s live right now</h2>
        <ul className="mt-3 space-y-2 text-neutral-700">
          <li>• Consulting: active client work</li>
          <li>• Budget app: building and iterating</li>
          <li>• Everything else: intentionally “coming soon”</li>
        </ul>
      </section>

      <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Jeremy Hynes</p>
        <div className="flex gap-4">
          <Link className="hover:text-neutral-700" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-neutral-700" href="/contact">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}

function Card({
  title,
  desc,
  cta,
  href,
}: {
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-700">{desc}</p>
      <p className="mt-4 text-sm font-medium">{cta} →</p>
    </Link>
  );
}
