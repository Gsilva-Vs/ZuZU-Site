import { Clock3, Heart, Soup, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface Recipe {
  id: number;
  title: string;
  description: string;
  time: string;
  servings: string;
  category: string;
  image: string;
}

const fallbackRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Mousse de cacau com abacate',
    description: 'Cremoso, rapido e naturalmente adocicado com o sabor da fruta.',
    time: '10 min',
    servings: '2 porcoes',
    category: 'Sobremesa',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Panqueca de banana e aveia',
    description: 'Uma opcao macia para o cafe da manha, sem acucar adicionado e facil de repetir.',
    time: '15 min',
    servings: '4 unidades',
    category: 'Cafe da manha',
    image:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Cha gelado citrico com hortela',
    description: 'Refrescante, leve e elegante para acompanhar refeicoes ou tardes quentes.',
    time: '8 min',
    servings: '3 copos',
    category: 'Bebida',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
];

function Recipes() {
  const [likedRecipes, setLikedRecipes] = useState<number[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>(fallbackRecipes);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    void fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    if (!supabase) {
      setUsingFallback(true);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase.from('recipes').select('*');

      if (fetchError) {
        throw fetchError;
      }

      if (data && data.length > 0) {
        setRecipes(data);
        setUsingFallback(false);
        return;
      }

      setRecipes(fallbackRecipes);
      setUsingFallback(true);
    } catch (err) {
      setRecipes(fallbackRecipes);
      setUsingFallback(true);
      const message = err instanceof Error ? err.message : 'Nao foi possivel carregar as receitas agora.';

      if (
        message.toLowerCase().includes('does not exist') ||
        message.toLowerCase().includes('relation') ||
        message.toLowerCase().includes('404')
      ) {
        setError(null);
        return;
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = (id: number) => {
    setLikedRecipes((current) =>
      current.includes(id) ? current.filter((recipeId) => recipeId !== id) : [...current, id]
    );
  };

  return (
    <section id="receitas" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-white/50 bg-white/45 p-7 shadow-[0_24px_70px_rgba(214,197,139,0.14)] backdrop-blur-2xl sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-700/70">Receitas em destaque</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-5xl">
              Um espaco para receitas zero acucar com cara de casa bem cuidada.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
              A vitrine de receitas precisa ser clara, bonita e rapida de explorar. Por isso a estrutura
              abaixo usa cards grandes, poucos dados por item e foco em leitura imediata.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/60 bg-white/55 px-5 py-4">
              <p className="text-sm text-stone-500">Navegacao</p>
              <p className="mt-2 font-medium text-stone-800">Sem menus laterais e sem ruido visual</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/60 bg-white/55 px-5 py-4">
              <p className="text-sm text-stone-500">Experiencia</p>
              <p className="mt-2 font-medium text-stone-800">Leve, amigavel e com cards amplos</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="rounded-[2rem] border border-white/50 bg-white/50 p-10 text-center text-stone-600 backdrop-blur-2xl">
            Carregando receitas...
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="rounded-full border border-white/55 bg-white/55 px-4 py-2 text-sm text-stone-600 backdrop-blur-xl">
                {usingFallback
                  ? 'Mostrando receitas demonstrativas enquanto o banco e configurado.'
                  : 'Receitas carregadas a partir do Supabase.'}
              </div>
              {error ? (
                <p className="text-sm text-amber-900/80">Falha ao buscar dados externos: {error}</p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {recipes.map((recipe) => (
                <article
                  key={recipe.id}
                  className="group overflow-hidden rounded-[2rem] border border-white/55 bg-white/50 shadow-[0_18px_50px_rgba(214,197,139,0.14)] backdrop-blur-2xl transition hover:-translate-y-1.5 hover:bg-white/60"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                      <span className="rounded-full border border-white/55 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 backdrop-blur-xl">
                        {recipe.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleLike(recipe.id)}
                        className="rounded-full border border-white/55 bg-white/80 p-2 text-stone-600 backdrop-blur-xl transition hover:bg-white"
                        aria-label={`Curtir ${recipe.title}`}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedRecipes.includes(recipe.id) ? 'fill-rose-500 text-rose-500' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/80 px-3 py-1 text-xs font-medium text-amber-800">
                      <Soup className="h-3.5 w-3.5" />
                      Feita para uma rotina mais leve
                    </div>

                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-stone-900">{recipe.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{recipe.description}</p>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm text-stone-500">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/65 px-3 py-2">
                        <Clock3 className="h-4 w-4 text-amber-700" />
                        {recipe.time}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/65 px-3 py-2">
                        <Users className="h-4 w-4 text-amber-700" />
                        {recipe.servings}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-6 w-full rounded-[1.25rem] border border-white/55 bg-white/65 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-amber-100/70"
                    >
                      Ver detalhes da receita
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Recipes;
