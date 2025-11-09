export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$1,500/mo',
      desc: 'One AI agent + monthly management. Perfect to validate ROI fast.',
      features: ['1 AI role (sales or support)', 'Weekly optimization', 'CRM + helpdesk integrations', 'Email + chat support'],
    },
    {
      name: 'Growth',
      price: '$4,000/mo',
      desc: 'Three AI agents working as a pod, orchestrated to hit KPIs.',
      features: ['Up to 3 AI roles', 'Daily optimization', 'Custom workflows', 'Slack support'],
      highlight: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      desc: 'Dedicated AI team with advanced automations and SLAs.',
      features: ['Unlimited roles', 'Quarterly strategy sprints', 'Advanced orchestration', 'Priority support'],
    },
  ];

  return (
    <section id="pricing" className="bg-[#fbf8f1]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Simple, managed pricing</h2>
          <p className="mt-4 text-neutral-600">All plans include setup, training, and monthly management.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border ${t.highlight ? 'border-amber-400 shadow-lg shadow-amber-200/40' : 'border-neutral-200'} bg-white p-8`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-neutral-900">{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-neutral-900">{t.price}</p>
              <p className="mt-2 text-sm text-neutral-600">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold ${t.highlight ? 'bg-black text-amber-300' : 'bg-neutral-900 text-white'} hover:opacity-90`}
              >
                Start Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
