import { CHAPTERS_PART_1 } from './chaptersPart1';
import { CHAPTERS_PART_2 } from './chaptersPart2';
import { CHAPTERS_PART_3 } from './chaptersPart3';
import { EbookChapter } from '../types/ebook';

export const ALL_CHAPTERS: EbookChapter[] = [
  ...CHAPTERS_PART_1,
  ...CHAPTERS_PART_2,
  ...CHAPTERS_PART_3
];

export const EBOOK_META = {
  title: 'CASA QUE RENDI',
  subtitle: 'Guia Completo Home Office do Zero — Trabalhe de casa e ganhe sua primeira renda em 30 dias',
  edition: 'Edição Completa Profissional · 55 Páginas',
  seal: 'De R$ 197 por apenas R$ 27,90',
  originalPrice: 'R$ 197,00',
  promoPrice: 'R$ 27,90',
  totalPages: 55,
  coverImage: '/src/assets/images/cover_home_office_1795594176718.jpg'
};
