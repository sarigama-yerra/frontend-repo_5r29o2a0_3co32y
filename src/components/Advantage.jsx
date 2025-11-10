function Advantage() {
  const items = [
    { label: '24/7 operations', icon: '⏱️' },
    { label: 'No benefits / No sick days', icon: '✅' },
    { label: 'Scales instantly', icon: '📈' },
    { label: 'One accountable partner', icon: '🤝' },
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-violet-700 via-indigo-600 to-sky-600 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.label} className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>{i.icon}</span>
              <span className="font-semibold">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantage;
