function Compare() {
  const rows = [
    { label: 'Availability', a: 'Business hours, PTO, sick days', b: '24/7, no sick days' },
    { label: 'Ramp-up time', a: 'Weeks to hire & train', b: 'Days to launch' },
    { label: 'Scalability', a: 'Limited by headcount', b: 'Instantly scales' },
    { label: 'Consistency', a: 'Varies by person', b: 'Predictable, monitored' },
    { label: 'Costs', a: 'Salary + benefits + tools', b: 'Flat managed plan' },
  ];

  return (
    <section id="compare" className="py-20 bg-gradient-to-b from-white to-violet-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Why BotStaff Beats Traditional Staffing</h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full text-left">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-neutral-700">Category</th>
                <th className="px-4 py-3 text-sm font-semibold text-neutral-700">Typical In-House / Outsourced</th>
                <th className="px-4 py-3 text-sm font-semibold text-neutral-700">BotStaff</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? 'bg-white' : 'bg-neutral-50/50'}>
                  <td className="px-4 py-4 align-top text-sm text-neutral-600">{r.label}</td>
                  <td className="px-4 py-4 align-top text-sm text-rose-600">✗ {r.a}</td>
                  <td className="px-4 py-4 align-top text-sm text-emerald-700">✓ {r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Calculator />

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-6 py-3 text-white font-semibold shadow-lg">See your custom savings — Free consult</a>
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  // simple interactive sliders
  return (
    <div className="mt-10 rounded-2xl border border-neutral-200 p-6 bg-white">
      <h3 className="font-semibold text-lg text-neutral-900">Traditional staffing cost estimator</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <Slider label="Roles" id="roles" min={1} max={20} step={1} defaultValue={4} format={(v)=>`${v}`}/>
        <Slider label="Benefits %" id="benefits" min={0} max={50} step={1} defaultValue={20} format={(v)=>`${v}%`}/>
        <Slider label="After-hours %" id="after" min={0} max={100} step={5} defaultValue={30} format={(v)=>`${v}%`}/>
      </div>
      <Output />
    </div>
  );
}

import { useId, useMemo, useState } from 'react';

function Slider({ label, id, min, max, step, defaultValue, format }) {
  const htmlId = useId();
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <label htmlFor={`${htmlId}-${id}`} className="block text-sm font-medium text-neutral-700">{label}: <span className="font-semibold">{format(value)}</span></label>
      <input id={`${htmlId}-${id}`} type="range" min={min} max={max} step={step} value={value} onChange={(e)=>setValue(Number(e.target.value))} className="mt-2 w-full accent-violet-600" />
    </div>
  );
}

function Output() {
  const [roles, setRoles] = useState(4);
  const [benefits, setBenefits] = useState(20);
  const [after, setAfter] = useState(30);

  // Controlled via query of inputs above
  // To keep things simple, we observe them via DOM each render
  const values = useMemo(() => {
    const sliders = document.querySelectorAll('input[type="range"]');
    const v = Array.from(sliders).map((el) => Number(el.value));
    return { roles: v[0] ?? roles, benefits: v[1] ?? benefits, after: v[2] ?? after };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const payroll = useMemo(() => {
    const basePerRole = 52000; // avg salary
    const benefitsCost = basePerRole * (values.benefits / 100);
    const afterHoursMult = 1 + values.after / 100 * 0.25;
    const total = values.roles * (basePerRole + benefitsCost) * afterHoursMult;
    return Math.round(total);
  }, [values]);

  return (
    <div className="mt-6 grid items-center gap-4 sm:grid-cols-2">
      <div className="text-sm text-neutral-600">Adjust the sliders to estimate traditional payroll vs. a managed AI workforce.</div>
      <div className="rounded-xl bg-neutral-900 text-white p-4 text-right">
        <div className="text-xs uppercase tracking-wide text-neutral-400">Estimated Annual Payroll</div>
        <div className="text-2xl font-bold">${(payroll).toLocaleString()}</div>
      </div>
    </div>
  );
}

export default Compare;
