/**
 * Public interface for any bibliographic item.
 * Exposes read‑only properties through getters.
 */
export interface IBibliographicItem {
  readonly title: string;
  readonly authors: string[];
  readonly keywords: string[];
  readonly abstractText: string;
  readonly publicationDate: Date;
  readonly pages: string;
  readonly publisher: string;

  toIEEE(): string;
}
