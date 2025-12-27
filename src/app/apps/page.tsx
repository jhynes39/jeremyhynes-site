import Link from "next/link";

export default function AppsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Apps</h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        I build practical software tools. Current focus is personal finance:
        budgeting, spend tracking, and statement ingestion.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">Budget App</h2>
          <p className="mt-2 text-neutral-700">
            Budget vs actual tracking with categories, month views, and insights.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            Status: in active development
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">Statement Analyzer</h2>
          <p className="mt-2 text-neutral-700">
            Upload bank/credit card statements and auto-categorize spending. Tie
            insights into the Budget App.
          </p>
          <p className="mt-4 text-sm text-neutral-500">Status: coming soon</p>
        </div>
      </div>

      <div className="mt-10">
        <Link
          className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          href="/contact"
        >
          Contact about apps →
        </Link>
      </div>
    </main>
  );
}
