import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

function LiveOpsCard() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-xl overflow-hidden">
      <div className="px-5 py-3 bg-gradient-to-r from-sky-500/20 to-violet-500/20 border-b border-white/60 flex items-center gap-2">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2" />
        <p className="text-sm font-medium text-emerald-700">running</p>
      </div>
      <div className="p-5 text-sm leading-relaxed text-neutral-800 space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-lg">📧</span>
          <p>Email drafted: “Estimate follow-up” — ready to approve</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">📱</span>
          <p>Posted Instagram Reel + auto-reply to 4 comments</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">🗂️</span>
          <p>CRM updated: new lead from website form</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">📅</span>
          <p>Booked: Dana — Tue 2:30 PM (SMS confirm sent)</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.25),rgba(14,165,233,0.15)_40%,transparent_70%)]" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 bg-violet-50 border border-violet-200 rounded-full px-3 py-1 w-max">AI Workforce</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">Your Business, Fully Staffed by AI</h1>
          <p className="mt-5 text-lg text-neutral-700 max-w-xl">We set up and run an AI team that books appointments, posts content, answers leads, and keeps your site & CRM updated — all done for you, in plain English.</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-600/40 hover:shadow-violet-600/60 transition-shadow">Book Free Consultation</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-full border border-violet-300 px-6 py-3 text-violet-700 bg-white hover:bg-violet-50 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Watch 90-second demo
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />No long contracts</li>
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />Human override anytime</li>
            <li className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />We speak zero-jargon</li>
          </ul>
        </div>
        <div className="relative flex items-center justify-center">
          <LiveOpsCard />
        </div>
      </div>
    </section>
  );
}

export default Hero;
