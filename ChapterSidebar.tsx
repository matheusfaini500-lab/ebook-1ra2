import { Check, Layers, BookOpen } from 'lucide-react';
import { EbookChapter } from '../types/ebook';

interface ChapterSidebarProps {
  chapters: EbookChapter[];
  activeChapterId: string;
  readMode: 'single' | 'continuous';
  completedChapters: string[];
  onSelectChapter: (chapterId: string) => void;
  onChangeReadMode: (mode: 'single' | 'continuous') => void;
}

export function ChapterSidebar({
  chapters,
  activeChapterId,
  readMode,
  completedChapters,
  onSelectChapter,
  onChangeReadMode
}: ChapterSidebarProps) {
  const progressPct = Math.round((completedChapters.length / chapters.length) * 100);

  return (
    <aside className="no-print w-full lg:w-80 shrink-0">
      <div className="lg:sticky lg:top-20 rounded-xl border border-zinc-800/90 bg-[#0D110F] p-4">
        {/* Reading Mode Switch */}
        <div className="flex items-center gap-1 rounded-lg bg-[#070908] p-1 border border-zinc-800/80">
          <button
            type="button"
            onClick={() => onChangeReadMode('single')}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              readMode === 'single'
                ? 'bg-[#17211B] text-[#00E676]'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Por Capítulo</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeReadMode('continuous')}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              readMode === 'continuous'
                ? 'bg-[#17211B] text-[#00E676]'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Livro Inteiro</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-zinc-400 tabular-nums">
            <span>Progresso das tarefas</span>
            <span className="font-mono font-semibold text-[#00E676]">{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full bg-[#00E676] transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Chapter List */}
        <nav aria-label="Sumário dos Capítulos" className="mt-4 max-h-[60vh] overflow-y-auto space-y-1 pr-1">
          {chapters.map((chapter) => {
            const isActive = readMode === 'single' && activeChapterId === chapter.id;
            const isDone = completedChapters.includes(chapter.id);

            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onSelectChapter(chapter.id)}
                className={`w-full flex items-start justify-between gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#132018] text-[#00E676] border border-[#00E676]/35'
                    : 'text-zinc-300 hover:bg-[#131916] hover:text-zinc-50 border border-transparent'
                }`}
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="font-mono text-[11px] font-semibold text-zinc-500 pt-0.5 tabular-nums shrink-0">
                    {String(chapter.number).padStart(2, '0')}
                  </span>
                  <span className="leading-snug font-medium line-clamp-2">
                    {chapter.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                  <span className="font-mono text-[10px] text-zinc-500 tabular-nums">
                    p.{chapter.pageStart}
                  </span>
                  {isDone && (
                    <Check className="h-3.5 w-3.5 text-[#00E676]" aria-label="Tarefa concluída" />
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
