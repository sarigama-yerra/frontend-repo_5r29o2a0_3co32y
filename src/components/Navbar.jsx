import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-[#f5f0e6]/80 backdrop-blur supports-[backdrop-filter]:bg-[#f5f0e6]/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-amber-400 font-bold">B</div>
          <span className="text-lg font-semibold tracking-tight text-neutral-900">BotStaff</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-amber-300 shadow-sm transition hover:bg-neutral-900"
          >
            Get Started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-200/60"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200/60 bg-[#f5f0e6]">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-neutral-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-amber-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
