import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">BotStaff</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/></svg>
        </button>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <a href="#how" className="text-neutral-700 hover:text-neutral-900">How it works</a>
          <a href="#compare" className="text-neutral-700 hover:text-neutral-900">Compare</a>
          <a href="#industries" className="text-neutral-700 hover:text-neutral-900">Who we help</a>
          <a href="#faq" className="text-neutral-700 hover:text-neutral-900">FAQ</a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-white shadow-md shadow-violet-500/40 hover:shadow-violet-500/70 transition-shadow">Book Free Consultation</a>
        </nav>
      </div>
      {open && (
        <div className="sm:hidden border-t border-neutral-200">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            <a onClick={() => setOpen(false)} href="#how" className="py-1">How it works</a>
            <a onClick={() => setOpen(false)} href="#compare" className="py-1">Compare</a>
            <a onClick={() => setOpen(false)} href="#industries" className="py-1">Who we help</a>
            <a onClick={() => setOpen(false)} href="#faq" className="py-1">FAQ</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-2 text-white shadow-md shadow-violet-500/40">Book Free Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
