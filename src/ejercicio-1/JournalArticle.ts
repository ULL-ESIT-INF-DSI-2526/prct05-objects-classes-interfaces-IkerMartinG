import { BaseBibliographicItem } from "./BaseBibliographicItem";

/**
 * Represents a journal article (artículo de revista).
 *
 * A journal article is a bibliographic item published in a scientific or academic journal.
 * In addition to the common bibliographic fields inherited from
 * {@link BaseBibliographicItem}, it includes:
 *
 * - The name of the journal.
 * - The volume number.
 * - The issue number.
 *
 * This class implements the IEEE reference format for journal articles.
 */
export class JournalArticle extends BaseBibliographicItem {
  /**
   * Name of the journal where the article was published.
   */
  private _journalName: string;

  /**
   * Volume number of the journal.
   */
  private _volume: number;

  /**
   * Issue number of the journal.
   */
  private _issue: number;

  /**
   * Creates a new journal article.
   *
   * @param title - Title of the article.
   * @param authors - List of authors.
   * @param keywords - Keywords describing the work.
   * @param abstractText - Abstract or summary of the article.
   * @param publicationDate - Date when the article was published.
   * @param pages - Page range of the article.
   * @param publisher - Publisher of the journal.
   * @param journalName - Name of the journal.
   * @param volume - Volume number of the journal.
   * @param issue - Issue number of the journal.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstractText: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    journalName: string,
    volume: number,
    issue: number,
  ) {
    super(
      title,
      authors,
      keywords,
      abstractText,
      publicationDate,
      pages,
      publisher,
    );

    this._journalName = journalName;
    this._volume = volume;
    this._issue = issue;
  }

  /**
   * Gets the name of the journal.
   */
  get journalName(): string {
    return this._journalName;
  }

  /**
   * Gets the volume number of the journal.
   */
  get volume(): number {
    return this._volume;
  }

  /**
   * Gets the issue number of the journal.
   */
  get issue(): number {
    return this._issue;
  }

  /**
   * Generates the IEEE reference for this journal article.
   *
   * IEEE format example:
   * ```
   * A. Author, "Article Title", Journal Name, vol. 12, no. 3, pp. 10–20, 2020.
   * ```
   *
   * @returns The formatted IEEE reference as a string.
   */
  public toIEEE(): string {
    const year = this.publicationDate.getFullYear();
    const authors = this.formatAuthorsIEEE();

    return `${authors}, "${this.title}", ${this.journalName}, vol. ${this.volume}, no. ${this.issue}, pp. ${this.pages}, ${year}.`;
  }
}
