import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f0e6] text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} BotStaff. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#features" className="text-neutral-600 hover:text-neutral-900">Features</a>
            <a href="#pricing" className="text-neutral-600 hover:text-neutral-900">Pricing</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
