import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ALL_CHAPTERS } from './data/ebookContent';
import { TopBar, ViewSection } from './components/TopBar';
import { CoverShowcase } from './components/CoverShowcase';
import { ChapterSidebar } from './components/ChapterSidebar';
import { ChapterView } from './components/ChapterView';
import { PrintEdition } from './components/PrintEdition';

const STORAGE_KEY_TASKS = 'cqr_completed_chapters_v1';

export default function App() {
  const [activeView, setActiveView] = useState<ViewSection>('cover');
  const [activeChapterId, setActiveChapterId] = useState<string>('cap-1');
  const [readMode, setReadMode] = useState<'single' | 'continuous'>('single');
  const [completedChapters, setCompletedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TASKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(completedChapters));
    } catch {
      // Ignore storage errors
    }
  }, [completedChapters]);

  const activeIndex = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);
  const currentChapter = ALL_CHAPTERS[activeIndex] ?? ALL_CHAPTERS[0];

  const handleToggleTaskComplete = (chapterId: string) => {
    setCompletedChapters((prev) =>
      prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId]
    );
  };

  const handleJumpToChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setReadMode('single');
    setActiveView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContinuous = () => {
    setReadMode('continuous');
    setActiveView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070908] text-[#F4F7F5]">
      <TopBar
        activeView={activeView}
        activeChapterId={activeChapterId}
        onSelectView={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onJumpToChapter={handleJumpToChapter}
        onPrintPdf={handlePrintPdf}
      />

      {/* Mobile Compact Quick Navigation Strip (below header, not sticky) */}
      <div className="no-print md:hidden border-b border-zinc-800/80 bg-[#0A0E0C] px-4 py-2.5">
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveView('cover')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'cover' ? 'bg-[#17231C] text-[#00E676]' : 'text-zinc-400'
            }`}
          >
            Capa
          </button>
          <button
            type="button"
            onClick={() => setActiveView('reader')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'reader' && activeChapterId !== 'cap-10' && activeChapterId !== 'cap-15'
                ? 'bg-[#17231C] text-[#00E676]'
                : 'text-zinc-400'
            }`}
          >
            Ler Ebook
          </button>
          <button
            type="button"
            onClick={() => handleJumpToChapter('cap-10')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'reader' && activeChapterId === 'cap-10'
                ? 'bg-[#17231C] text-[#00E676]'
                : 'text-zinc-400'
            }`}
          >
            50 Sites
          </button>
          <button
            type="button"
            onClick={() => handleJumpToChapter('cap-15')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'reader' && activeChapterId === 'cap-15'
                ? 'bg-[#17231C] text-[#00E676]'
                : 'text-zinc-400'
            }`}
          >
            Bônus
          </button>
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <main className="no-print">
        {activeView === 'cover' && (
          <CoverShowcase
            chapters={ALL_CHAPTERS}
            completedTasksCount={completedChapters.length}
            onStartReading={() => handleJumpToChapter('cap-1')}
            onSelectChapter={handleJumpToChapter}
            onOpenContinuous={handleOpenContinuous}
          />
        )}

        {activeView === 'reader' && (
          <div className="mx-auto flex max-w-[1360px] flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8 lg:py-10">
            {/* Mobile Chapter Selector Dropdown */}
            <div className="lg:hidden">
              <label htmlFor="mobile-chapter-select" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Ir para capítulo:
              </label>
              <div className="relative">
                <select
                  id="mobile-chapter-select"
                  value={activeChapterId}
                  onChange={(e) => handleJumpToChapter(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-800 bg-[#0D110F] py-2.5 pl-3.5 pr-10 text-sm font-medium text-zinc-100 focus:border-[#00E676] focus:outline-none"
                >
                  {ALL_CHAPTERS.map((ch) => (
                    <option key={ch.id} value={ch.id}>
                      Cap. {String(ch.number).padStart(2, '0')} — {ch.title} (p.{ch.pageStart})
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <ChapterSidebar
                chapters={ALL_CHAPTERS}
                activeChapterId={activeChapterId}
                readMode={readMode}
                completedChapters={completedChapters}
                onSelectChapter={handleJumpToChapter}
                onChangeReadMode={setReadMode}
              />
            </div>

            {/* Reading Canvas */}
            <div className="flex-1 min-w-0">
              {readMode === 'single' ? (
                <ChapterView
                  chapter={currentChapter}
                  isTaskCompleted={completedChapters.includes(currentChapter.id)}
                  onToggleTaskComplete={handleToggleTaskComplete}
                  showPagination={true}
                  hasPrev={activeIndex > 0}
                  hasNext={activeIndex < ALL_CHAPTERS.length - 1}
                  onPrev={() => {
                    if (activeIndex > 0) {
                      handleJumpToChapter(ALL_CHAPTERS[activeIndex - 1].id);
                    }
                  }}
                  onNext={() => {
                    if (activeIndex < ALL_CHAPTERS.length - 1) {
                      handleJumpToChapter(ALL_CHAPTERS[activeIndex + 1].id);
                    }
                  }}
                />
              ) : (
                <div className="space-y-16">
                  {ALL_CHAPTERS.map((chapter, idx) => (
                    <div
                      key={chapter.id}
                      id={chapter.id}
                      className={idx > 0 ? 'border-t border-zinc-800 pt-14' : ''}
                    >
                      <ChapterView
                        chapter={chapter}
                        isTaskCompleted={completedChapters.includes(chapter.id)}
                        onToggleTaskComplete={handleToggleTaskComplete}
                        showPagination={false}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="no-print border-t border-zinc-800/80 bg-[#070908] py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-500">
          <p>
            Casa Que Rendi — Guia Completo Home Office do Zero · Edição Digital Completa (55 Páginas)
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => {
                setActiveView('cover');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Capa e Sumário
            </button>
            <button
              type="button"
              onClick={handleOpenContinuous}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Leitura Contínua
            </button>
            <button
              type="button"
              onClick={handlePrintPdf}
              className="text-[#00E676] hover:underline cursor-pointer"
            >
              Exportar PDF Completo
            </button>
          </div>
        </div>
      </footer>

      {/* Dedicated Full-Book Print Layout */}
      <PrintEdition chapters={ALL_CHAPTERS} />
    </div>
  );
}
