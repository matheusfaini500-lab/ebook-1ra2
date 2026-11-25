import { ArrowLeft, ArrowRight, CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import { EbookChapter } from '../types/ebook';
import { SitesDirectory } from './SitesDirectory';
import { BonusTools } from './BonusTools';

interface ChapterViewProps {
  chapter: EbookChapter;
  isTaskCompleted: boolean;
  onToggleTaskComplete: (chapterId: string) => void;
  showPagination?: boolean;
  hasPrev?: boolean;
  hasNext?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

export function ChapterView({
  chapter,
  isTaskCompleted,
  onToggleTaskComplete,
  showPagination = true,
  hasPrev = false,
  hasNext = false,
  onPrev,
  onNext
}: ChapterViewProps) {
  return (
    <article className="mx-auto max-w-3xl space-y-10 pb-12">
      {/* Chapter Header */}
      <header className="space-y-4 border-b border-zinc-800/90 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400 tabular-nums">
          <span className="font-mono font-semibold text-[#00E676]">
            Capítulo {String(chapter.number).padStart(2, '0')}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            Págs. {String(chapter.pageStart).padStart(2, '0')}–{String(chapter.pageEnd).padStart(2, '0')}
          </span>
          <span aria-hidden="true">·</span>
          <span>{chapter.readingTime} de leitura</span>
          <span aria-hidden="true">·</span>
          <span className="text-zinc-200">{chapter.dailyPotential}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight text-zinc-50 text-balance">
          {chapter.title}
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
          {chapter.subtitle}
        </p>
      </header>

      {/* Optional Chapter Figure */}
      {chapter.image && (
        <figure className="space-y-2.5">
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#0D110F]">
            <img
              src={chapter.image.src}
              alt={chapter.image.alt}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[380px] object-cover"
            />
          </div>
          <figcaption className="text-xs italic text-zinc-400">
            {chapter.image.caption}
          </figcaption>
        </figure>
      )}

      {/* Opening Prose */}
      <section className="space-y-4">
        {chapter.intro.map((paragraph, idx) => (
          <p
            key={idx}
            className={`text-[16px] leading-[1.75] text-zinc-200 ${
              idx === 0
                ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-[#00E676]'
                : ''
            }`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Main Content Sections */}
      {chapter.sections.map((section, secIdx) => (
        <section key={secIdx} className="space-y-5 pt-2">
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-50">
            {section.heading}
          </h2>

          <div className="space-y-4">
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-[15.5px] leading-[1.75] text-zinc-300">
                {p}
              </p>
            ))}
          </div>

          {section.steps && section.steps.length > 0 && (
            <ol className="space-y-3 rounded-xl border border-zinc-800/90 bg-[#0C110E] p-5">
              {section.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3.5 text-sm sm:text-[15px] leading-relaxed text-zinc-200">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#132219] font-mono text-xs font-bold text-[#00E676] tabular-nums">
                    {sIdx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          )}

          {section.exampleBox && (
            <div className="rounded-xl border border-[#00E676]/30 bg-[#0D1510] p-5 space-y-2.5">
              <h3 className="font-display text-base font-bold text-[#00E676]">
                {section.exampleBox.title}
              </h3>
              {section.exampleBox.content.map((line, lIdx) => (
                <p key={lIdx} className="text-sm leading-relaxed text-zinc-200">
                  {line}
                </p>
              ))}
            </div>
          )}

          {section.table && (
            <div className="space-y-2 pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {section.table.title}
              </p>
              <div className="overflow-x-auto rounded-xl border border-zinc-800/90 bg-[#0B0F0D]">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 bg-[#101613] text-zinc-300">
                      {section.table.headers.map((header, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 font-semibold whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/80 tabular-nums">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#111814] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 leading-snug ${
                              cIdx === 0 ? 'font-semibold text-zinc-100' : 'text-zinc-300'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {section.table.caption && (
                <p className="text-xs text-zinc-500">{section.table.caption}</p>
              )}
            </div>
          )}
        </section>
      ))}

      {/* Chapter-Specific Platforms List */}
      {chapter.platforms && chapter.platforms.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-zinc-50">
            Plataformas Recomendadas Neste Capítulo
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {chapter.platforms.map((plat) => (
              <div
                key={plat.name}
                className="flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-[#0C110E] p-4 space-y-3"
              >
                <div className="space-y-1">
                  <a
                    href={`https://${plat.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-display text-base font-bold text-zinc-50 hover:text-[#00E676] transition-colors"
                  >
                    <span>{plat.name}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#00E676]" aria-hidden="true" />
                  </a>
                  <p className="text-xs leading-relaxed text-zinc-400">{plat.role}</p>
                </div>
                <div className="border-t border-zinc-800/80 pt-2.5 space-y-0.5 text-xs tabular-nums">
                  <p className="font-mono font-semibold text-[#00E676]">{plat.earningRange}</p>
                  <p className="text-zinc-400">Pagamento: {plat.payout}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Modules for Cap 10 & Cap 15 */}
      {chapter.id === 'cap-10' && <SitesDirectory />}
      {chapter.id === 'cap-15' && <BonusTools />}

      {/* Common Mistakes */}
      <section className="space-y-4 border-t border-zinc-800/90 pt-8">
        <h2 className="font-display text-xl font-bold text-zinc-50">
          Erros Comuns que Travam Iniciantes (e Como Evitar)
        </h2>
        <div className="divide-y divide-zinc-800/80 rounded-xl border border-zinc-800/90 bg-[#0B0F0D]">
          {chapter.mistakes.map((item, mIdx) => (
            <div key={mIdx} className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                  Erro Comum
                </p>
                <p className="mt-1 text-sm text-zinc-200">{item.mistake}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#00E676]">
                  Como Fazer Certo
                </p>
                <p className="mt-1 text-sm text-zinc-300">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* End-of-Chapter Practical Task */}
      <section className="rounded-xl border border-[#00E676]/45 bg-[#0C1610] p-5 sm:p-6 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#00E676]">
              Ação Obrigatória · Tempo estimado: {chapter.task.estimatedTime}
            </p>
            <h2 className="font-display mt-1 text-xl font-bold text-zinc-50">
              {chapter.task.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-300">{chapter.task.objective}</p>
          </div>

          <button
            type="button"
            onClick={() => onToggleTaskComplete(chapter.id)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isTaskCompleted
                ? 'bg-[#00E676] text-[#050806]'
                : 'border border-zinc-700 bg-[#070908] text-zinc-100 hover:border-[#00E676]'
            }`}
          >
            {isTaskCompleted ? (
              <>
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                <span>Tarefa Concluída</span>
              </>
            ) : (
              <>
                <Circle className="h-4 w-4" aria-hidden="true" />
                <span>Marcar como Feita</span>
              </>
            )}
          </button>
        </div>

        <ul className="space-y-2.5 border-t border-zinc-800/80 pt-4">
          {chapter.task.steps.map((step, tIdx) => (
            <li key={tIdx} className="flex items-start gap-2.5 text-sm text-zinc-200">
              <span className="font-mono text-xs font-bold text-[#00E676] pt-0.5 tabular-nums">
                {String(tIdx + 1).padStart(2, '0')}.
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Video Callout Box */}
      {chapter.videos && chapter.videos.length > 0 && (
        <section
          aria-label="Vídeo complementar do capítulo"
          className="rounded-xl border border-[#00E676]/55 bg-[#09120D] p-5 sm:p-6 space-y-3"
        >
          {chapter.videos.map((video, vIdx) => (
            <div
              key={vIdx}
              className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${
                vIdx > 0 ? 'border-t border-zinc-800/90 pt-3' : ''
              }`}
            >
              <div className="min-w-0 space-y-1">
                <p className="font-display text-sm font-bold text-[#00E676]">
                  {video.label}:
                </p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block break-all font-mono text-xs text-zinc-200 underline decoration-zinc-600 underline-offset-2 hover:text-[#00E676] hover:decoration-[#00E676] transition-colors"
                >
                  {video.url}
                </a>
              </div>

              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00E676] px-4 py-2 text-xs font-bold text-[#050806] hover:bg-[#22F08B] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Abrir Vídeo</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          ))}
        </section>
      )}

      {/* Pagination Controls */}
      {showPagination && (
        <nav
          aria-label="Navegação entre capítulos"
          className="no-print flex items-center justify-between gap-4 border-t border-zinc-800/90 pt-6"
        >
          <button
            type="button"
            disabled={!hasPrev}
            onClick={onPrev}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#0D120F] px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-[#00E676]/50 hover:text-[#00E676] disabled:opacity-35 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Capítulo Anterior</span>
          </button>

          <button
            type="button"
            disabled={!hasNext}
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-lg bg-[#00E676] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#050806] hover:bg-[#22F08B] disabled:opacity-35 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <span>Próximo Capítulo</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </article>
  );
}
