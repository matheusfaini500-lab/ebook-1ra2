import { Printer } from 'lucide-react';

export type ViewSection = 'cover' | 'reader' | 'sites' | 'bonus';

interface TopBarProps {
  activeView: ViewSection;
  activeChapterId: string;
  onSelectView: (view: ViewSection) => void;
  onJumpToChapter: (chapterId: string) => void;
  onPrintPdf: () => void;
}

export function TopBar({
  activeView,
  activeChapterId,
  onSelectView,
  onJumpToChapter,
  onPrintPdf
}: TopBarProps) {
  const isReaderOther =
    activeView === 'reader' && activeChapterId !== 'cap-10' && activeChapterId !== 'cap-15';
  const isSitesActive = activeView === 'reader' && activeChapterId === 'cap-10';
  const isBonusActive = activeView === 'reader' && activeChapterId === 'cap-15';

  return (
    <header className="no-print sticky top-0 z-40 border-b border-zinc-800/90 bg-[#070908]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Wordmark */}
        <button
          type="button"
          onClick={() => onSelectView('cover')}
          className="font-display text-lg font-bold tracking-tight text-zinc-50 hover:text-[#00E676] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] rounded"
        >
          Casa Que Rendi
        </button>

        {/* Zone 2: 4 Single-Line Nav Links */}
        <nav aria-label="Navegação do Ebook" className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            type="button"
            onClick={() => onSelectView('cover')}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'cover'
                ? 'border-[#00E676] text-[#00E676]'
                : 'border-transparent text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Capa
          </button>
          <button
            type="button"
            onClick={() => onSelectView('reader')}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isReaderOther
                ? 'border-[#00E676] text-[#00E676]'
                : 'border-transparent text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Ler Ebook
          </button>
          <button
            type="button"
            onClick={() => onJumpToChapter('cap-10')}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isSitesActive
                ? 'border-[#00E676] text-[#00E676]'
                : 'border-transparent text-zinc-400 hover:text-zinc-100'
            }`}
          >
            50 Sites
          </button>
          <button
            type="button"
            onClick={() => onJumpToChapter('cap-15')}
            className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isBonusActive
                ? 'border-[#00E676] text-[#00E676]'
                : 'border-transparent text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Bônus
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onPrintPdf}
            className="inline-flex items-center gap-2 rounded-lg bg-[#00E676] px-4 py-2 text-xs sm:text-sm font-semibold text-[#050806] hover:bg-[#22F08B] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070908]"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            <span>Salvar PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
