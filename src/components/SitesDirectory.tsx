import { useMemo, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { SITES_50 } from '../data/sites50';
import { SiteCategory } from '../types/ebook';

const CATEGORIES: ('Todas' | SiteCategory)[] = [
  'Todas',
  'Freelancer Brasil',
  'Microtarefas e IA',
  'Afiliados e Vendas',
  'Tradução e Transcrição',
  'Empresas Gringas (Dólar)',
  'Testes de Apps e Redação'
];

export function SitesDirectory() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | SiteCategory>('Todas');
  const [deviceFilter, setDeviceFilter] = useState<'Todos' | 'Celular' | 'Computador'>('Todos');

  const filteredSites = useMemo(() => {
    const query = search.trim().toLowerCase();
    return SITES_50.filter((site) => {
      const matchCategory = selectedCategory === 'Todas' || site.category === selectedCategory;
      const matchDevice =
        deviceFilter === 'Todos' || site.device === deviceFilter || site.device === 'Ambos';
      const matchSearch =
        !query ||
        site.name.toLowerCase().includes(query) ||
        site.howToStart.toLowerCase().includes(query) ||
        site.payout.toLowerCase().includes(query) ||
        site.category.toLowerCase().includes(query);

      return matchCategory && matchDevice && matchSearch;
    });
  }, [search, selectedCategory, deviceFilter]);

  return (
    <section aria-label="Diretório dos 50 melhores sites e apps" className="mt-8 space-y-6">
      {/* Filter Controls */}
      <div className="rounded-xl border border-zinc-800/90 bg-[#0D120F] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome, Pix, Wise, PayPal..."
              aria-label="Buscar sites e aplicativos"
              className="w-full rounded-lg border border-zinc-800 bg-[#070908] py-2.5 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[#00E676] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-[#070908] p-1 shrink-0">
            {(['Todos', 'Celular', 'Computador'] as const).map((device) => (
              <button
                key={device}
                type="button"
                onClick={() => setDeviceFilter(device)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  deviceFilter === device
                    ? 'bg-[#17211B] text-[#00E676]'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {device}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer border ${
                selectedCategory === category
                  ? 'border-[#00E676]/50 bg-[#132018] text-[#00E676]'
                  : 'border-zinc-800 bg-[#080B09] text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-xs text-zinc-400 tabular-nums">
          Mostrando <strong className="text-zinc-100">{filteredSites.length}</strong> de 50 plataformas verificadas
        </p>
      </div>

      {/* Sites List */}
      {filteredSites.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-[#0D120F] p-8 text-center">
          <p className="text-sm text-zinc-300">Nenhum site encontrado com esse filtro.</p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedCategory('Todas');
              setDeviceFilter('Todos');
            }}
            className="mt-3 text-xs font-semibold text-[#00E676] hover:underline cursor-pointer"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-zinc-800/90 bg-[#0B0F0D]">
          <div className="divide-y divide-zinc-800/80">
            {filteredSites.map((site) => (
              <div
                key={site.id}
                className="flex flex-col gap-3 p-4 sm:p-5 sm:flex-row sm:items-start sm:justify-between hover:bg-[#101613] transition-colors"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 tabular-nums">
                    <span className="font-mono font-semibold text-[#00E676]">
                      #{String(site.id).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{site.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{site.device}</span>
                    <span aria-hidden="true">·</span>
                    <span>{site.language}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <h4 className="font-display text-base font-bold text-zinc-50">
                      {site.name}
                    </h4>
                    <a
                      href={`https://${site.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#00E676] hover:underline"
                    >
                      <span>{site.url}</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-300 max-w-2xl">
                    {site.howToStart}
                  </p>
                </div>

                <div className="shrink-0 sm:text-right space-y-1 pt-1 sm:pt-0">
                  <p className="font-mono text-sm font-bold text-[#00E676] tabular-nums">
                    {site.dailyEstimate}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Receba via: {site.payout}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
