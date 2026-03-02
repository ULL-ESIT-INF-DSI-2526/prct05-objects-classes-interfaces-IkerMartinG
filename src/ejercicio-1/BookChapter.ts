import { BaseBibliographicItem } from "./BaseBibliographicItem";

/**
 * Represents a book chapter (capítulo de libro).
 *
 * A book chapter is a bibliographic item that forms part of a larger book.
 * In addition to the common bibliographic fields inherited from
 * {@link BaseBibliographicItem}, it includes:
 *
 * - The title of the chapter.
 * - The editors of the book.
 * - The edition of the book (optional).
 * - The ISBN of the book (optional).
 *
 * This class implements the IEEE reference format for book chapters.
 */
export class BookChapter extends BaseBibliographicItem {
  /**
   * Title of the chapter.
   */
  private _chapterTitle: string;

  /**
   * Editors of the book in which the chapter appears.
   */
  private _editors: string[];

  /**
   * Edition of the book (optional).
   */
  private _bookEdition?: string;

  /**
   * ISBN of the book (optional).
   */
  private _isbn?: string;

  /**
   * Creates a new book chapter.
   *
   * @param title - Title of the chapter (also stored as the base title).
   * @param authors - Authors of the chapter.
   * @param keywords - Keywords describing the chapter.
   * @param abstractText - Abstract or summary of the chapter.
   * @param publicationDate - Publication date of the book.
   * @param pages - Page range of the chapter.
   * @param publisher - Publisher of the book.
   * @param chapterTitle - Title of the chapter.
   * @param editors - Editors of the book.
   * @param bookEdition - Edition of the book (optional).
   * @param isbn - ISBN of the book (optional).
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstractText: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    chapterTitle: string,
    editors: string[],
    bookEdition?: string,
    isbn?: string,
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

    this._chapterTitle = chapterTitle;
    this._editors = editors;
    this._bookEdition = bookEdition;
    this._isbn = isbn;
  }

  /**
   * Gets the chapter title.
   */
  get chapterTitle(): string {
    return this._chapterTitle;
  }

  /**
   * Gets the editors of the book.
   */
  get editors(): string[] {
    return this._editors;
  }

  /**
   * Gets the edition of the book.
   */
  get bookEdition(): string | undefined {
    return this._bookEdition;
  }

  /**
   * Gets the ISBN of the book.
   */
  get isbn(): string | undefined {
    return this._isbn;
  }

  /**
   * Generates the IEEE reference for this book chapter.
   *
   * IEEE format example:
   * ```
   * A. Author, "Chapter Title", in Book Title, X. Editor and Y. Editor (eds.),
   * Publisher, Year, pp. 10–20.
   * ```
   *
   * @returns The formatted IEEE reference as a string.
   */
  public toIEEE(): string {
    const year = this.publicationDate.getFullYear();
    const authors = this.formatAuthorsIEEE();
    const editorsFormatted = this._editors.join(", ");

    const editionPart = this._bookEdition ? `${this._bookEdition} ed., ` : "";

    return `${authors}, "${this.chapterTitle}", in ${this.title}, ${editorsFormatted} (eds.), ${editionPart}${this.publisher}, ${year}, pp. ${this.pages}.`;
  }
}
