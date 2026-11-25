import { EBOOK_META } from '../data/ebookContent';
import { SITES_50 } from '../data/sites50';
import { BONUS_CHECKLIST, DEFAULT_ROUTINE, OUTREACH_SCRIPTS } from '../data/chaptersPart3';
import { EbookChapter } from '../types/ebook';

interface PrintEditionProps {
  chapters: EbookChapter[];
}

export function PrintEdition({ chapters }: PrintEditionProps) {
  return (
    <div className="hidden print:block text-gray-900 bg-white">
      {/* PAGE 1: PREMIUM PRINT COVER */}
      <section className="print-cover min-h-[250mm] p-12 flex flex-col justify-between rounded-none bg-[#070908] text-white">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E676]">
            {EBOOK_META.edition}
          </p>
          <div className="h-0.5 w-20 bg-[#00E676]" />
        </div>

        <div className="my-8 flex justify-center">
          <img
            src={EBOOK_META.coverImage}
            alt="Capa Casa Que Rendi"
            className="h-[115mm] w-auto rounded-lg border border-[#00E676]/50 object-cover"
          />
        </div>

        <div className="space-y-5">
          <p className="text-sm uppercase tracking-widest text-gray-300">
            Guia Completo Home Office do Zero
          </p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-white">
            CASA QUE <span className="text-[#00E676]">RENDI</span>
          </h1>
          <p className="text-base text-gray-200 max-w-lg">
            {EBOOK_META.subtitle}
          </p>
          <div className="inline-block border border-[#00E676] px-5 py-3 rounded">
            <p className="text-xs line-through text-gray-400">Valor real: {EBOOK_META.originalPrice}</p>
            <p className="text-lg font-bold text-[#00E676]">{EBOOK_META.seal}</p>
          </div>
        </div>
      </section>

      {/* PAGE 2-3: SUMÁRIO COMPLETO */}
      <section className="print-page-break py-6 space-y-6">
        <header className="border-b border-gray-300 pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Casa Que Rendi · Edição Completa
          </p>
          <h2 className="font-display text-3xl font-bold text-gray-900 mt-1">Sumário Oficial</h2>
        </header>

        <div className="divide-y divide-gray-200">
          {chapters.map((ch) => (
            <div key={ch.id} className="flex items-baseline justify-between py-2.5 text-sm">
              <div>
                <span className="font-mono font-bold text-emerald-700 mr-2">
                  Cap. {String(ch.number).padStart(2, '0')}
                </span>
                <span className="font-semibold text-gray-900">{ch.title}</span>
              </div>
              <span className="font-mono text-xs text-gray-600 tabular-nums">
                Págs. {String(ch.pageStart).padStart(2, '0')}–{String(ch.pageEnd).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ALL 16 CHAPTERS */}
      {chapters.map((chapter) => (
        <section key={chapter.id} className="print-page-break py-4 space-y-6">
          <header className="border-b-2 border-emerald-700 pb-3 space-y-1.5">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
              Capítulo {String(chapter.number).padStart(2, '0')} · Páginas {chapter.pageStart}–{chapter.pageEnd} · {chapter.dailyPotential}
            </p>
            <h2 className="font-display text-2xl font-bold text-gray-900">{chapter.title}</h2>
            <p className="text-sm text-gray-700">{chapter.subtitle}</p>
          </header>

          {chapter.image && (
            <figure className="print-avoid-break space-y-1">
              <img
                src={chapter.image.src}
                alt={chapter.image.alt}
                className="w-full max-h-[75mm] object-cover rounded border border-gray-200"
              />
              <figcaption className="text-[10px] italic text-gray-600">
                {chapter.image.caption}
              </figcaption>
            </figure>
          )}

          <div className="space-y-3">
            {chapter.intro.map((p, i) => (
              <p key={i} className="text-[10.5pt] leading-relaxed text-gray-800">
                {p}
              </p>
            ))}
          </div>

          {chapter.sections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-3 pt-1">
              <h3 className="font-display text-lg font-bold text-gray-900">{sec.heading}</h3>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-[10.5pt] leading-relaxed text-gray-800">
                  {p}
                </p>
              ))}

              {sec.steps && (
                <ol className="list-decimal pl-5 space-y-1.5 text-[10pt] text-gray-800">
                  {sec.steps.map((st, stIdx) => (
                    <li key={stIdx}>{st}</li>
                  ))}
                </ol>
              )}

              {sec.exampleBox && (
                <div className="print-avoid-break rounded border border-emerald-700/40 bg-emerald-50/60 p-4 space-y-1.5">
                  <h4 className="font-bold text-sm text-emerald-900">{sec.exampleBox.title}</h4>
                  {sec.exampleBox.content.map((line, lIdx) => (
                    <p key={lIdx} className="text-[10pt] text-gray-800">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {sec.table && (
                <div className="print-avoid-break space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    {sec.table.title}
                  </p>
                  <table className="w-full border-collapse border border-gray-300 text-[9.5pt]">
                    <thead>
                      <tr className="bg-gray-100">
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="border border-gray-300 px-2.5 py-1.5 text-left font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="border border-gray-300 px-2.5 py-1.5">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {/* Print All 50 Sites Table inside Chapter 10 */}
          {chapter.id === 'cap-10' && (
            <div className="space-y-3 pt-2">
              <h3 className="font-display text-lg font-bold text-gray-900">
                Lista Completa: Os 50 Melhores Sites e Apps
              </h3>
              <table className="w-full border-collapse border border-gray-300 text-[8.5pt]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left">#</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Plataforma</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Categoria</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Dispositivo</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Pagamento</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Estimativa/Dia</th>
                  </tr>
                </thead>
                <tbody>
                  {SITES_50.map((site) => (
                    <tr key={site.id} className="print-avoid-break">
                      <td className="border border-gray-300 px-2 py-1 font-mono">{site.id}</td>
                      <td className="border border-gray-300 px-2 py-1 font-semibold">
                        {site.name} ({site.url})
                      </td>
                      <td className="border border-gray-300 px-2 py-1">{site.category}</td>
                      <td className="border border-gray-300 px-2 py-1">{site.device}</td>
                      <td className="border border-gray-300 px-2 py-1">{site.payout}</td>
                      <td className="border border-gray-300 px-2 py-1 font-mono">{site.dailyEstimate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Print Bonus Materials inside Chapter 15 */}
          {chapter.id === 'cap-15' && (
            <div className="space-y-5 pt-2">
              <div className="print-avoid-break space-y-2">
                <h3 className="font-display text-lg font-bold text-gray-900">
                  Bônus 1 — Checklist Completo do Iniciante
                </h3>
                <ul className="space-y-1 text-[9.5pt]">
                  {BONUS_CHECKLIST.map((item) => (
                    <li key={item.id}>[ ] {item.category}: {item.text}</li>
                  ))}
                </ul>
              </div>

              <div className="print-avoid-break space-y-2">
                <h3 className="font-display text-lg font-bold text-gray-900">
                  Bônus 2 — Planilha Modelo de Rotina Diária
                </h3>
                <table className="w-full border-collapse border border-gray-300 text-[9pt]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-2 py-1 text-left">Horário</th>
                      <th className="border border-gray-300 px-2 py-1 text-left">Bloco</th>
                      <th className="border border-gray-300 px-2 py-1 text-left">Foco</th>
                      <th className="border border-gray-300 px-2 py-1 text-left">Meta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEFAULT_ROUTINE.map((blk, i) => (
                      <tr key={i}>
                        <td className="border border-gray-300 px-2 py-1 font-mono">{blk.time}</td>
                        <td className="border border-gray-300 px-2 py-1 font-semibold">{blk.activity}</td>
                        <td className="border border-gray-300 px-2 py-1">{blk.focus}</td>
                        <td className="border border-gray-300 px-2 py-1">{blk.goal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-lg font-bold text-gray-900">
                  Bônus 3 — Frases Prontas para Abordar Clientes
                </h3>
                {OUTREACH_SCRIPTS.map((scr) => (
                  <div key={scr.id} className="print-avoid-break rounded border border-gray-300 p-3 space-y-1">
                    <p className="text-xs font-bold text-emerald-800">{scr.channel} — {scr.title}</p>
                    <pre className="whitespace-pre-wrap font-sans text-[9.5pt] text-gray-800">
                      {scr.message}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mistakes */}
          <div className="print-avoid-break space-y-2 pt-2">
            <h3 className="font-display text-base font-bold text-gray-900">Erros Comuns a Evitar</h3>
            <ul className="space-y-1.5 text-[9.5pt] text-gray-800">
              {chapter.mistakes.map((m, mIdx) => (
                <li key={mIdx}>
                  <strong>Erro:</strong> {m.mistake} — <strong>Solução:</strong> {m.fix}
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Task */}
          <div className="print-avoid-break rounded border-2 border-emerald-700 p-4 space-y-2">
            <p className="text-xs font-bold uppercase text-emerald-800">
              {chapter.task.title} ({chapter.task.estimatedTime})
            </p>
            <p className="text-sm font-semibold text-gray-900">{chapter.task.objective}</p>
            <ol className="list-decimal pl-5 space-y-1 text-[9.5pt] text-gray-800">
              {chapter.task.steps.map((st, tIdx) => (
                <li key={tIdx}>{st}</li>
              ))}
            </ol>
          </div>

          {chapter.videos && chapter.videos.length > 0 && (
            <div className="print-avoid-break rounded border border-emerald-700 bg-emerald-50/70 p-3.5 space-y-2">
              {chapter.videos.map((video, vIdx) => (
                <p key={vIdx} className="text-[9.5pt] text-gray-900 break-all">
                  <strong className="text-emerald-900">{video.label}:</strong>{' '}
                  <a href={video.url} className="underline text-emerald-800">
                    {video.url}
                  </a>
                </p>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
