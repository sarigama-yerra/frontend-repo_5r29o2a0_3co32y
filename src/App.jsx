import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workforce from './components/Workforce';
import HowItWorks from './components/HowItWorks';
import Compare from './components/Compare';
import Advantage from './components/Advantage';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Workforce />
        <HowItWorks />
        <Compare />
        <Advantage />
        <Industries />
        <FAQ />
        <Contact />
      </main>
      <footer className="mt-10 bg-gradient-to-r from-[#0b1020] to-[#2a145a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center space-y-3">
          <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">BotStaff</div>
          <p className="text-sm text-white/70">© {new Date().getFullYear()} BotStaff</p>
          <div className="text-sm text-white/70 space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
