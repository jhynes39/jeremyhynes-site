import { sendContactEmail } from "./actions";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-neutral-700">
        Send a message and I’ll get back to you by email.
      </p>

      <form action={sendContactEmail} className="mt-10 max-w-xl space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows={6}
            className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-400"
            placeholder="What can I help with?"
          />
        </div>

        <button className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90">
          Send message
        </button>

        <p className="text-xs text-neutral-500">
          Or email directly: <span className="font-medium">info@jeremyhynes.com</span>
        </p>
      </form>
    </main>
  );
}
