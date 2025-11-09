export default function CTA() {
  return (
    <section id="contact" className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to hire AI teammates?</h3>
            <p className="mt-4 text-neutral-300">
              Tell us your goal and we’ll design, deploy, and manage a custom AI team that delivers measurable results.
            </p>
          </div>
          <form
            className="rounded-2xl border border-amber-400/30 bg-neutral-900 p-6 shadow-lg shadow-amber-200/10"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! We will reach out shortly.');
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="name" placeholder="Your name" required className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:border-amber-400 focus:outline-none" />
              <input type="email" name="email" placeholder="Work email" required className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:border-amber-400 focus:outline-none" />
            </div>
            <input type="text" name="company" placeholder="Company" className="mt-4 w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:border-amber-400 focus:outline-none" />
            <textarea name="goal" placeholder="What do you want your AI team to achieve?" rows={4} className="mt-4 w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-400 focus:border-amber-400 focus:outline-none" />
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-black hover:bg-amber-300">
              Book a Free Strategy Call
            </button>
            <p className="mt-3 text-center text-xs text-neutral-400">No spam. We’ll only contact you about this request.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
