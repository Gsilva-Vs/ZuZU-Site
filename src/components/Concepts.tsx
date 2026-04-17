import { BookOpen, Compass, HeartPulse, Sparkles } from 'lucide-react';

const concepts = [
  {
    icon: BookOpen,
    title: 'Base educativa',
    description:
      'O site pode ensinar o que significa viver com menos acucar adicionado de forma pratica, sem terrorismo nutricional.',
  },
  {
    icon: HeartPulse,
    title: 'Bem-estar em primeiro plano',
    description:
      'A ideia e conectar sabor, autonomia e rotina leve, mostrando que escolhas conscientes tambem podem ser prazerosas.',
  },
  {
    icon: Compass,
    title: 'Estrutura enxuta',
    description:
      'A melhor arquitetura inicial e simples: inicio, receitas, conceitos, futuras categorias e talvez um blog quando o conteudo crescer.',
  },
  {
    icon: Sparkles,
    title: 'Visual coerente com a proposta',
    description:
      'Glassmorphism suave, fundos luminosos e cantos arredondados reforcam a identidade clean sem parecer frio ou generico.',
  },
];

function Concepts() {
  return (
    <section id="conceitos" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/50 bg-white/45 p-8 shadow-[0_20px_60px_rgba(214,197,139,0.14)] backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-700/70">Conceitos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-5xl">
              A marca pede um site que respire e ensine sem pesar.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Como voce ainda esta definindo a estrutura interna, esta landing page ja cria uma fundacao
              muito boa: apresenta a proposta, mostra receitas e abre espaco para evoluir depois com mais
              categorias, guias ou conteudos sazonais.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(248,236,191,0.58))] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Direcao recomendada</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Evitar laterais por enquanto e apostar em uma hierarquia vertical bem organizada e a opcao
                mais elegante para preservar a identidade limpa do Zuzu Zero.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {concepts.map((concept) => {
              const Icon = concept.icon;

              return (
                <article
                  key={concept.title}
                  className="rounded-[2rem] border border-white/55 bg-white/50 p-7 shadow-[0_16px_40px_rgba(214,197,139,0.12)] backdrop-blur-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-amber-100/70">
                    <Icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-stone-900">{concept.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{concept.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Concepts;
