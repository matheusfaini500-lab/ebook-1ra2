import { ArrowRight, BookOpen, CheckSquare, Smartphone } from 'lucide-react';
import { EBOOK_META } from '../data/ebookContent';
import { EbookChapter } from '../types/ebook';

interface CoverShowcaseProps {
  chapters: EbookChapter[];
  completedTasksCount: number;
  onStartReading: () => void;
  onSelectChapter: (chapterId: string) => void;
  onOpenContinuous: () => void;
}

export function CoverShowcase({
  chapters,
  completedTasksCount,
  onStartReading,
  onSelectChapter,
  onOpenContinuous
}: CoverShowcaseProps) {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {/* Split Hero: Premium Cover + Editorial Overview */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Premium Ebook Cover (3:4) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[430px] aspect-[3/4] overflow-hidden rounded-xl border border-[#00E676]/40 bg-[#050706] shadow-[0_24px_70px_-15px_rgba(0,230,118,0.22)]">
            <img
              src={EBOOK_META.coverImage}
              alt="Pessoa trabalhando de casa pelo celular com notebook em mesa escura"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
            {/* Measured Contrast Scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#040605] via-[#040605]/55 to-[#040605]/65"
              aria-hidden="true"
            />

            {/* Cover Neon Frame Accent */}
            <div
              className="pointer-events-none absolute inset-3 rounded-lg border border-[#00E676]/35"
              aria-hidden="true"
            />

            {/* Cover Typography Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-8">
              {/* Top Cover Line */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00E676]">
                  Edição Profissional · 55 Páginas
                </p>
                <div className="h-px w-16 bg-[#00E676]" />
              </div>

              {/* Bottom Title & Offer Seal */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-zinc-300">
                    Guia Completo Home Office do Zero
                  </p>
                  <h1 className="font-display mt-1 text-4xl sm:text-[2.85rem] font-extrabold leading-[1.02] tracking-tight text-white text-balance">
                    CASA QUE
                    <span className="block text-[#00E676]">RENDI</span>
                  </h1>
                </div>

                <p className="text-sm leading-relaxed text-zinc-200 max-w-xs">
                  Trabalhe de casa e ganhe sua primeira renda em 30 dias pelo celular, sem experiência e sem investir nada.
                </p>

                {/* Price Seal */}
                <div className="flex items-center justify-between gap-3 rounded-lg border border-[#00E676]/50 bg-[#070B09]/92 px-4 py-3">
                  <div>
                    <p className="text-[11px] text-zinc-400 line-through tabular-nums">
                      Valor real: R$ 197,00
                    </p>
                    <p className="font-display text-base font-bold text-white tabular-nums">
                      Por apenas <span className="text-[#00E676]">R$ 27,90</span>
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#00E676] whitespace-nowrap">
                    Acesso Completo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Editorial Presentation & Sumário Preview */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 py-1">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400">
              <span>16 Capítulos Completos</span>
              <span aria-hidden="true">·</span>
              <span>50 Sites e Apps Reais</span>
              <span aria-hidden="true">·</span>
              <span>Plano Guiado de 30 Dias</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.12] tracking-tight text-zinc-50 text-balance">
              O manual definitivo para fazer de <span className="text-[#00E676] tabular-nums">R$ 50 a R$ 220/dia</span> trabalhando do celular.
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
              Esqueça promessas mágicas e cursos caros. Este guia foi escrito em linguagem simples e direta para quem precisa de renda real saindo do absoluto zero — com passo a passo detalhado, tabelas de ganhos, lista verificada de sites em Real e Dólar, scripts prontos e tarefas práticas ao final de cada capítulo.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onStartReading}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#00E676] px-6 py-3.5 text-sm font-bold text-[#050806] hover:bg-[#22F08B] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>Ler Capítulo 1 Agora</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenContinuous}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-[#111613] px-5 py-3.5 text-sm font-semibold text-zinc-100 hover:border-[#00E676]/60 hover:text-[#00E676] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Ver Livro Completo (55 Págs.)</span>
              </button>
            </div>
          </div>

          {/* 4-Column Quantitative Strip */}
          <div className="grid grid-cols-2 gap-4 border-t border-zinc-800/90 pt-6 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold text-zinc-50 tabular-nums">55 págs.</p>
              <p className="mt-1 text-xs text-zinc-400">Conteúdo denso e aplicado</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#00E676] tabular-nums">R$ 0,00</p>
              <p className="mt-1 text-xs text-zinc-400">Investimento para começar</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-zinc-50 tabular-nums">50 sites</p>
              <p className="mt-1 text-xs text-zinc-400">Plataformas reais testadas</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-zinc-50 tabular-nums">
                {completedTasksCount}/16
              </p>
              <p className="mt-1 text-xs text-zinc-400">Tarefas concluídas por você</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Table of Contents (Sumário Oficial) */}
      <section className="mt-14 border-t border-zinc-800/90 pt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00E676]">
              Sumário Oficial da Edição
            </p>
            <h2 className="font-display mt-1 text-2xl sm:text-3xl font-bold text-zinc-50">
              Todos os 16 capítulos incluídos
            </h2>
          </div>
          <p className="text-sm text-zinc-400 flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-[#00E676]" aria-hidden="true" />
            <span>Clique em qualquer capítulo para abrir a leitura imediata</span>
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => onSelectChapter(chapter.id)}
              className="group flex items-start justify-between gap-4 rounded-xl border border-zinc-800/90 bg-[#0E1310] p-4 text-left hover:border-[#00E676]/55 hover:bg-[#121915] transition-colors cursor-pointer"
            >
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-xs text-zinc-400 tabular-nums">
                  <span className="font-mono font-semibold text-[#00E676]">
                    Cap. {String(chapter.number).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Págs. {String(chapter.pageStart).padStart(2, '0')}–{String(chapter.pageEnd).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{chapter.readingTime}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-zinc-100 group-hover:text-[#00E676] transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400 line-clamp-2">
                  {chapter.subtitle}
                </p>
              </div>
              <div className="shrink-0 pt-1 text-zinc-500 group-hover:text-[#00E676] transition-colors">
                <CheckSquare className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
