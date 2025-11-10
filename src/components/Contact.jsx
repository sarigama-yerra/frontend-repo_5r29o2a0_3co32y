import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Stop running your business alone</h2>
          <p className="mt-3 text-neutral-600">Get a free consultation with an AI expert. We’ll map your workflows and give you a custom quote — you only pay for what you need.</p>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-6 py-3 text-white font-semibold shadow-lg">Schedule My Free Consultation</a>
          <div className="mt-10 rounded-2xl border border-neutral-200 p-6 bg-white">
            <p className="text-sm text-neutral-700"><strong>Email:</strong> hello@botstaff.ai</p>
            <p className="text-sm text-neutral-700 mt-2"><strong>Hours:</strong> 24/7 monitoring, business-hours human support</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 p-6 bg-white space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700">Name</label>
            <input required type="text" className="mt-1 w-full rounded-md border-neutral-300 focus:border-violet-500 focus:ring-violet-500"/>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border-neutral-300 focus:border-violet-500 focus:ring-violet-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Phone</label>
              <input type="tel" className="mt-1 w-full rounded-md border-neutral-300 focus:border-violet-500 focus:ring-violet-500"/>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border-neutral-300 focus:border-violet-500 focus:ring-violet-500" />
          </div>
          <button type="submit" className="w-full rounded-md bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3">Send Message</button>
          {sent && (
            <div role="alert" className="mt-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2">✅ Message sent. Our team will reply shortly.</div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
