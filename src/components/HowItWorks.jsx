function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Free consultation',
      desc: 'We learn your goals, tools, and bottlenecks.'
    },
    {
      num: '2',
      title: 'Tailored plan',
      desc: 'Custom AI workforce built for your exact needs. You approve.'
    },
    {
      num: '3',
      title: 'Install & manage',
      desc: 'We set it up, run it daily, and report wins.'
    },
  ];

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">How We Work (Simple)</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl bg-white p-6 border border-neutral-200 hover:border-violet-300 transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white font-semibold">{s.num}</div>
              <h3 className="mt-4 font-semibold text-lg text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-600/40 hover:shadow-violet-600/60 transition-shadow">Book Free Consultation</a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
