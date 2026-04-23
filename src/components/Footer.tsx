import { Image, Instagram, Mail, MapPinned } from 'lucide-react';

const footerLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#receitas', label: 'Receitas' },
  { href: '#conceitos', label: 'Conceitos' },
  { href: '#manifesto', label: 'Manifesto' },
];

function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/55 bg-white/50 p-8 shadow-[0_22px_70px_rgba(214,197,139,0.14)] backdrop-blur-2xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-14 items-center justify-center rounded-2xl border border-dashed border-amber-300/80 bg-white/70">
                <Image className="h-5 w-5 text-amber-700/80" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-[0.22em] text-amber-700/85">ZUZU ZERO</p>
                <p className="text-sm text-stone-500">Placeholder para sua futura logo</p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600">
              A nova base do site aposta em um visual clean, luminoso e moderno para acolher receitas,
              conceitos e futuros conteudos sem perder a identidade suave que voce imaginou.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Navegacao</p>
            <div className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-stone-600 transition hover:text-amber-700">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

<div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Proximos passos</p>
            <div className="mt-4 space-y-3 text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-4 w-4 text-amber-700" />
                <span>Criar categorias futuras como doces, salgados, bebidas e guias.</span>
              </div>


              <a 
                href="https://www.instagram.com/projetozuzuzero06/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 transition hover:text-amber-700"
              >
                <Instagram className="mt-0.5 h-4 w-4 text-amber-700" />
                <span>ZuZu Zero.</span>
              </a>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-amber-700" />
                <span>projetozuzuzero06@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/50 pt-6 text-sm text-stone-500">
          2026 Zuzu Zero. Um ponto de partida moderno para um projeto leve e bem cuidado.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
