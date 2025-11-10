function Industries() {
  const items = [
    { title: 'Home Services & Contractors', img: '🏠' },
    { title: 'Med-Spas & Clinics', img: '🧴' },
    { title: 'Auto Shops & Dealers', img: '🚗' },
    { title: 'Agencies & Local Retail', img: '🏪' },
  ];

  return (
    <section id="industries" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Who We Work Best With</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="group rounded-2xl bg-white p-6 border border-neutral-200 hover:border-blue-400 shadow-sm transition-all hover:shadow-blue-500/20 hover:scale-[1.02]">
              <div className="text-3xl">{i.img}</div>
              <h3 className="mt-3 font-semibold text-neutral-900">{i.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
