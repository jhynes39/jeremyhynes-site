export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Roadmap</h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        This site is intentionally built to support multiple areas of work over
        time—without mixing audiences or diluting the consulting focus.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Section
          title="Near-term"
          items={[
            "Consulting: keep it clean and client-focused",
            "Apps: Budget App and statement ingestion tools",
            "Writing: launch a simple blog for long-form posts",
          ]}
        />
        <Section
          title="Later"
          items={[
            "Children’s books page + updates",
            "Christian writing section",
            "Workshop projects (wood/steel, wool)",
            "Store/boutique (only when ready)",
            "Bitcoin writing/resources (measured, long-term)",
          ]}
        />
      </div>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-neutral-700">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}
