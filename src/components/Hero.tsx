import { ArrowRight, Sparkles, Star } from 'lucide-react';

const highlights = [
  'Receitas leves para o dia a dia',
  'Conceitos claros para comer melhor',
  'Visual clean com atmosfera acolhedora',
];

function Hero() {
  return (
    <section id="inicio" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="rounded-[2rem] border border-white/45 bg-white/45 p-7 shadow-[0_24px_80px_rgba(214,197,139,0.18)] backdrop-blur-2xl sm:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-white/70 px-4 py-2 text-sm font-medium text-stone-600">
            <Sparkles className="h-4 w-4 text-amber-600" />
            Uma casa digital para receitas sem acucar adicionado
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-stone-900 sm:text-6xl lg:text-7xl">
            Zuzu Zero nasce para provar que leveza tambem tem sabor.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            A proposta do site e unir receitas, conteudo educativo e uma experiencia visual limpa.
            Tudo com tons suaves, atmosfera moderna e um estilo glassmorphism delicado para reforcar a
            ideia de bem-estar.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#receitas"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/70 bg-amber-300/85 px-7 py-4 text-sm font-semibold text-amber-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Ver receitas
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#conceitos"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/60 px-7 py-4 text-sm font-semibold text-stone-700 transition hover:bg-white/80"
            >
              Entender o conceito zero acucar
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/60 bg-white/55 px-4 py-4 text-sm leading-6 text-stone-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/55 bg-white/50 p-7 shadow-[0_20px_60px_rgba(209,189,127,0.18)] backdrop-blur-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-700/70">Manifesto</p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-900">Clean, moderno e acolhedor</h2>
              </div>
              <div className="rounded-2xl border border-white/55 bg-amber-100/60 p-3">
                <Star className="h-5 w-5 text-amber-700" />
              </div>
            </div>

            <p className="mt-5 text-base leading-7 text-stone-600">
              A direcao ideal para o Zuzu Zero e manter a tela respirando: espacamento generoso,
              blocos com cantos largos, vidro fosco sutil e poucos elementos concorrendo pela atencao.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/55 bg-white/45 p-6 backdrop-blur-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-stone-400">Paleta</p>
              <div className="mt-5 flex gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#fcfbf7]" />
                <div className="h-12 w-12 rounded-2xl bg-[#f6edc9]" />
                <div className="h-12 w-12 rounded-2xl bg-[#f0d98a]" />
                <div className="h-12 w-12 rounded-2xl bg-[#d8c07a]" />
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                Branco aquecido, amarelo claro e dourado suave para manter o aspecto leve.
              </p>
            </div>

            <div
              id="manifesto"
              className="rounded-[1.75rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(250,242,214,0.62))] p-6 backdrop-blur-2xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-stone-400">Estrutura</p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Nada de barras laterais agora. A melhor base e uma landing page com fluxo vertical,
                secoes claras e navegacao simples para preservar a imagem limpa da marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
