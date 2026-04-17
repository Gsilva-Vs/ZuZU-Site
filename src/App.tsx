import { Image, Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import Recipes from './components/Recipes';
import Concepts from './components/Concepts';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

const navigationLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#receitas', label: 'Receitas' },
  { href: '#conceitos', label: 'Conceitos' },
  { href: '#manifesto', label: 'Manifesto' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,245,212,0.95),_rgba(252,251,247,0.92)_32%,_rgba(248,246,238,0.96)_100%)] text-stone-800">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute right-[-80px] top-16 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-12 w-14 items-center justify-center rounded-2xl border border-dashed border-amber-300/80 bg-white/65 shadow-[0_12px_30px_rgba(255,255,255,0.45)]">
              <Image className="h-5 w-5 text-amber-700/80" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.24em] text-amber-700/80">ZUZU ZERO</p>
              <p className="text-sm text-stone-500">Espaco reservado para sua logo</p>
            </div>
          </a>

          <div className="hidden items-center gap-3 rounded-full border border-white/45 bg-white/45 px-3 py-2 shadow-[0_18px_40px_rgba(214,197,139,0.16)] md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-sm text-stone-500">
              <Leaf className="h-4 w-4 text-amber-600" />
              <span>Leve, claro e acolhedor</span>
            </div>
            <a
              href="#receitas"
              className="rounded-full border border-amber-300/70 bg-amber-300/80 px-5 py-3 text-sm font-semibold text-amber-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Explorar receitas
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/55 text-stone-700 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/30 bg-white/65 px-4 pb-5 pt-4 backdrop-blur-2xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/50 bg-white/55 px-4 py-3 text-sm font-medium text-stone-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#receitas"
                className="rounded-2xl border border-amber-300/70 bg-amber-300/80 px-4 py-3 text-center text-sm font-semibold text-amber-950"
                onClick={() => setMenuOpen(false)}
              >
                Explorar receitas
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        <Reveal delay={40}>
          <Hero />
        </Reveal>
        <Reveal delay={80}>
          <Recipes />
        </Reveal>
        <Reveal delay={120}>
          <Concepts />
        </Reveal>
      </main>

      <Reveal delay={160}>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;
