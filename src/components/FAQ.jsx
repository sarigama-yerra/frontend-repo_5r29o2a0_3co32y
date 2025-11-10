import { useState } from 'react';

function FAQ() {
  const items = [
    { q: 'Do I need to learn any tools?', a: 'No. We build everything around your current stack and manage it for you. You review and approve in plain English.' },
    { q: 'How fast is setup?', a: 'Most clients launch in 7–14 days, depending on integrations and workflows.' },
    { q: 'Are there contracts?', a: 'No long-term commitments. Start, pause, or scale any time.' },
    { q: 'Can a human step in?', a: 'Yes. You can override, approve, or request human assistance at any point.' },
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 text-center">FAQ</h2>
        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          {items.map((item, idx) => (
            <Item key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full px-5 py-4 text-left flex items-center justify-between">
        <span className="font-medium text-neutral-900">{q}</span>
        <span className="text-neutral-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-neutral-600">{a}</div>
      )}
    </div>
  );
}

export default FAQ;
