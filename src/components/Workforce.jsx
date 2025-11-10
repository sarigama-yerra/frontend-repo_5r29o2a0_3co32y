function Workforce() {
  const roles = [
    {
      title: 'Appointment Setter',
      desc: 'Books & confirms calls, follows up no-shows, reschedules automatically.',
      icon: '📞',
    },
    {
      title: 'Social Media Ops',
      desc: 'Daily posts, replies, DM lead capture, and content calendar.',
      icon: '💬',
    },
    {
      title: 'Website & CRM',
      desc: 'Updates your site, routes forms, cleans your CRM, tags and tracks.',
      icon: '🗂️',
    },
    {
      title: 'Inbox & Admin',
      desc: 'Answers FAQs, drafts emails, and handles the busywork.',
      icon: '✉️',
    },
  ];

  return (
    <section id="workforce" className="py-20 bg-gradient-to-b from-white to-sky-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Plain-English roles. No jargon.</h2>
          <p className="mt-3 text-neutral-600">It’s like hiring a whole team — faster, cheaper, fully managed.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r) => (
            <div key={r.title} className="group relative rounded-2xl bg-white p-6 border border-transparent [background:radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_40%),white]">
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-sky-400/30 via-blue-400/20 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-semibold text-lg text-neutral-900">{r.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workforce;
