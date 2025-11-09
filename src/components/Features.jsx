export default function Features() {
  const features = [
    {
      title: 'AI Sales Reps',
      desc: 'Prospect, personalize, and follow up across email, LinkedIn, and SMS to book more meetings on autopilot.',
    },
    {
      title: '24/7 Support Agents',
      desc: 'Resolve tickets, answer FAQs, and triage complex issues across chat, email, and voice with human-like accuracy.',
    },
    {
      title: 'Operations Automations',
      desc: 'Automate repetitive back-office workflows across CRMs, spreadsheets, and internal tools with zero downtime.',
    },
    {
      title: 'Human-in-the-Loop',
      desc: 'We monitor quality and step in when needed so your brand voice and outcomes stay on point.',
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">What BotStaff Delivers</h2>
          <p className="mt-4 text-neutral-600">
            A managed AI workforce purpose-built to drive growth and efficiency from day one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
