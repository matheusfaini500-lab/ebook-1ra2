import { useEffect, useState } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';
import { BONUS_CHECKLIST, DEFAULT_ROUTINE, OUTREACH_SCRIPTS } from '../data/chaptersPart3';
import { RoutineBlock } from '../types/ebook';

type BonusTab = 'checklist' | 'rotina' | 'scripts';

const STORAGE_KEY_CHECKLIST = 'cqr_bonus_checklist_v1';
const STORAGE_KEY_ROUTINE = 'cqr_bonus_routine_v1';

export function BonusTools() {
  const [activeTab, setActiveTab] = useState<BonusTab>('checklist');

  // Checklist state
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CHECKLIST);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Income simulator state
  const [dailyTarget, setDailyTarget] = useState<number>(110);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(22);
  const [hoursPerDay, setHoursPerDay] = useState<number>(2.5);

  // Editable routine blocks
  const [routineBlocks, setRoutineBlocks] = useState<RoutineBlock[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ROUTINE);
      return saved ? JSON.parse(saved) : DEFAULT_ROUTINE;
    } catch {
      return DEFAULT_ROUTINE;
    }
  });

  // Copy feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CHECKLIST, JSON.stringify(checkedIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [checkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ROUTINE, JSON.stringify(routineBlocks));
    } catch {
      // Ignore storage quota errors
    }
  }, [routineBlocks]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyScript = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 2200);
    } catch {
      // Fallback copy
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 2200);
    }
  };

  const updateRoutineBlock = (index: number, field: keyof RoutineBlock, value: string) => {
    setRoutineBlocks((prev) =>
      prev.map((block, idx) => (idx === index ? { ...block, [field]: value } : block))
    );
  };

  const weeklyEstimate = dailyTarget * Math.min(daysPerMonth, 5);
  const monthlyEstimate = dailyTarget * daysPerMonth;
  const hourlyEquivalent = hoursPerDay > 0 ? dailyTarget / hoursPerDay : 0;

  return (
    <section aria-label="Ferramentas Bônus do Capítulo 15" className="mt-8 space-y-6">
      {/* Segmented Tool Selector */}
      <div className="flex flex-wrap gap-1 rounded-xl border border-zinc-800 bg-[#0A0E0C] p-1.5">
        <button
          type="button"
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 min-w-[140px] rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'checklist'
              ? 'bg-[#17231C] text-[#00E676]'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          1. Checklist Oficial ({checkedIds.length}/{BONUS_CHECKLIST.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('rotina')}
          className={`flex-1 min-w-[140px] rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'rotina'
              ? 'bg-[#17231C] text-[#00E676]'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          2. Planilha de Rotina & Meta
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('scripts')}
          className={`flex-1 min-w-[140px] rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'scripts'
              ? 'bg-[#17231C] text-[#00E676]'
              : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          3. Frases para Abordar Clientes
        </button>
      </div>

      {/* TAB 1: CHECKLIST */}
      {activeTab === 'checklist' && (
        <div className="rounded-xl border border-zinc-800/90 bg-[#0C110E] p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="font-display text-lg font-bold text-zinc-50">
                Checklist do Iniciante — Da Estrutura ao Primeiro Saque
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Marque cada passo concluído; seu progresso fica salvo neste navegador.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setCheckedIds([])}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Zerar marcações</span>
            </button>
          </div>

          <div className="divide-y divide-zinc-800/80 border-t border-zinc-800/80">
            {BONUS_CHECKLIST.map((item) => {
              const checked = checkedIds.includes(item.id);
              return (
                <label
                  key={item.id}
                  className="flex items-start gap-3.5 py-3.5 cursor-pointer hover:bg-[#111814] px-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleCheck(item.id)}
                    className="mt-1 h-4 w-4 rounded border-zinc-600 bg-[#070908] text-[#00E676] accent-[#00E676] cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                      {item.category}
                    </span>
                    <span
                      className={`block text-sm ${
                        checked ? 'line-through text-zinc-500' : 'text-zinc-200'
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: PLANILHA DE ROTINA & SIMULADOR */}
      {activeTab === 'rotina' && (
        <div className="space-y-6">
          {/* Interactive Calculator */}
          <div className="rounded-xl border border-zinc-800/90 bg-[#0C110E] p-5 sm:p-6 space-y-5">
            <div>
              <h4 className="font-display text-lg font-bold text-zinc-50">
                Simulador Financeiro de Meta Diária
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Ajuste sua meta de R$ 50 a R$ 220 por dia para calcular sua projeção mensal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label htmlFor="meta-dia" className="block text-xs font-medium text-zinc-300">
                  Meta por dia (R$)
                </label>
                <input
                  id="meta-dia"
                  type="number"
                  min={20}
                  max={500}
                  step={10}
                  value={dailyTarget}
                  onChange={(e) => setDailyTarget(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-lg border border-zinc-800 bg-[#070908] px-3 py-2 font-mono text-sm text-zinc-100 tabular-nums focus:border-[#00E676] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="dias-mes" className="block text-xs font-medium text-zinc-300">
                  Dias trabalhados / mês
                </label>
                <input
                  id="dias-mes"
                  type="number"
                  min={1}
                  max={30}
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Math.min(30, Math.max(1, Number(e.target.value))))}
                  className="w-full rounded-lg border border-zinc-800 bg-[#070908] px-3 py-2 font-mono text-sm text-zinc-100 tabular-nums focus:border-[#00E676] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="horas-dia" className="block text-xs font-medium text-zinc-300">
                  Horas livres por dia
                </label>
                <input
                  id="horas-dia"
                  type="number"
                  min={0.5}
                  max={12}
                  step={0.5}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Math.max(0.5, Number(e.target.value)))}
                  className="w-full rounded-lg border border-zinc-800 bg-[#070908] px-3 py-2 font-mono text-sm text-zinc-100 tabular-nums focus:border-[#00E676] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-zinc-800/80 pt-4 sm:grid-cols-3">
              <div>
                <p className="text-xs text-zinc-400">Projeção Semanal (5 dias)</p>
                <p className="font-mono text-xl font-bold text-zinc-100 tabular-nums mt-0.5">
                  R$ {weeklyEstimate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400">Projeção Mensal</p>
                <p className="font-mono text-xl font-bold text-[#00E676] tabular-nums mt-0.5">
                  R$ {monthlyEstimate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400">Valor Médio por Hora</p>
                <p className="font-mono text-xl font-bold text-zinc-100 tabular-nums mt-0.5">
                  R$ {hourlyEquivalent.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/h
                </p>
              </div>
            </div>
          </div>

          {/* Editable Routine Table */}
          <div className="rounded-xl border border-zinc-800/90 bg-[#0C110E] p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="font-display text-lg font-bold text-zinc-50">
                  Planilha Editável de Rotina Diária
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Clique em qualquer campo para adaptar horários e tarefas à sua realidade.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setRoutineBlocks(DEFAULT_ROUTINE)}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Restaurar padrão</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400">
                    <th className="py-2.5 pr-3 font-semibold">Horário</th>
                    <th className="py-2.5 pr-3 font-semibold">Bloco de Ação</th>
                    <th className="py-2.5 pr-3 font-semibold">O que Fazer</th>
                    <th className="py-2.5 font-semibold">Resultado Esperado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/70">
                  {routineBlocks.map((block, index) => (
                    <tr key={index}>
                      <td className="py-2.5 pr-2 align-top">
                        <input
                          type="text"
                          value={block.time}
                          onChange={(e) => updateRoutineBlock(index, 'time', e.target.value)}
                          aria-label={`Horário bloco ${index + 1}`}
                          className="w-28 rounded border border-zinc-800 bg-[#070908] px-2 py-1.5 font-mono text-xs text-[#00E676] tabular-nums focus:border-[#00E676] focus:outline-none"
                        />
                      </td>
                      <td className="py-2.5 pr-2 align-top">
                        <input
                          type="text"
                          value={block.activity}
                          onChange={(e) => updateRoutineBlock(index, 'activity', e.target.value)}
                          aria-label={`Atividade bloco ${index + 1}`}
                          className="w-full min-w-[160px] rounded border border-zinc-800 bg-[#070908] px-2.5 py-1.5 text-xs text-zinc-100 focus:border-[#00E676] focus:outline-none"
                        />
                      </td>
                      <td className="py-2.5 pr-2 align-top">
                        <input
                          type="text"
                          value={block.focus}
                          onChange={(e) => updateRoutineBlock(index, 'focus', e.target.value)}
                          aria-label={`Foco bloco ${index + 1}`}
                          className="w-full min-w-[200px] rounded border border-zinc-800 bg-[#070908] px-2.5 py-1.5 text-xs text-zinc-300 focus:border-[#00E676] focus:outline-none"
                        />
                      </td>
                      <td className="py-2.5 align-top">
                        <input
                          type="text"
                          value={block.goal}
                          onChange={(e) => updateRoutineBlock(index, 'goal', e.target.value)}
                          aria-label={`Meta bloco ${index + 1}`}
                          className="w-full min-w-[160px] rounded border border-zinc-800 bg-[#070908] px-2.5 py-1.5 text-xs text-zinc-300 focus:border-[#00E676] focus:outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FRASES PRONTAS */}
      {activeTab === 'scripts' && (
        <div className="space-y-4">
          {OUTREACH_SCRIPTS.map((script) => {
            const isCopied = copiedId === script.id;
            return (
              <div
                key={script.id}
                className="rounded-xl border border-zinc-800/90 bg-[#0C110E] p-5 space-y-3"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#00E676]">{script.channel}</p>
                    <h4 className="font-display text-base font-bold text-zinc-50 mt-0.5">
                      {script.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{script.context}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyScript(script.id, script.message)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isCopied
                        ? 'bg-[#00E676] text-[#050806]'
                        : 'border border-zinc-700 bg-[#141B17] text-zinc-100 hover:border-[#00E676]/60'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiar Texto</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="whitespace-pre-wrap rounded-lg border border-zinc-800/90 bg-[#070908] p-4 font-sans text-sm leading-relaxed text-zinc-200">
                  {script.message}
                </pre>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
