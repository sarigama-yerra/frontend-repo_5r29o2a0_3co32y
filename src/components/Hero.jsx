import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f0e6]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f5f0e6]/60 via-[#f5f0e6]/80 to-[#f5f0e6]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-40 md:pb-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-amber-300/50 bg-amber-50/50 px-3 py-1 text-xs font-medium text-amber-800">
            AI Staffing & Automations
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Build your dream team of AI agents with BotStaff
          </h1>
          <p className="mt-6 text-lg leading-7 text-neutral-700 md:text-xl">
            We deploy, train, and manage AI teammates that handle outreach, support, and operations —
            boosting revenue and efficiency while your team focuses on strategy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-amber-300 shadow-sm transition hover:bg-neutral-900">
              Launch My AI Team
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
              See How It Works
            </a>
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            Monthly management included. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
