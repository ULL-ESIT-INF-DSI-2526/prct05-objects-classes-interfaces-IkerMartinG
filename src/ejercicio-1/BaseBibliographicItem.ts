import { IBibliographicItem } from "./IBibliographicItem";

/**
 * Abstract base class implementing common behavior for all bibliographic items.
 *
 * This class provides the shared structure and functionality that all
 * bibliographic elements must have, such as:
 *
 * - Title
 * - Authors
 * - Keywords
 * - Abstract text
 * - Publication date
 * - Page range
 * - Publisher
 *
 * It also implements the getters required by {@link IBibliographicItem}
 * and provides a protected helper method to format authors in IEEE style.
 *
 * Concrete subclasses (e.g., journal articles, conference papers, book chapters)
 * must extend this class and implement the {@link toIEEE} method.
 */
export abstract class BaseBibliographicItem implements IBibliographicItem {
  /**
   * Title of the bibliographic item.
   */
  protected _title: string;

  /**
   * List of authors of the item.
   */
  protected _authors: string[];

  /**
   * Keywords describing the content of the item.
   */
  protected _keywords: string[];

  /**
   * Abstract or summary of the item.
   */
  protected _abstractText: string;

  /**
   * Date when the item was published.
   */
  protected _publicationDate: Date;

  /**
   * Page range of the item.
   */
  protected _pages: string;

  /**
   * Publisher of the item.
   */
  protected _publisher: string;

  /**
   * Creates a new bibliographic item with the common fields.
   *
   * @param title - Title of the item.
   * @param authors - List of authors.
   * @param keywords - Keywords describing the item.
   * @param abstractText - Abstract or summary.
   * @param publicationDate - Publication date.
   * @param pages - Page range.
   * @param publisher - Publisher name.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstractText: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
  ) {
    this._title = title;
    this._authors = authors;
    this._keywords = keywords;
    this._abstractText = abstractText;
    this._publicationDate = publicationDate;
    this._pages = pages;
    this._publisher = publisher;

    this.validate();
  }

  /** Gets the title of the item. */
  get title() {
    return this._title;
  }

  /** Gets the list of authors. */
  get authors() {
    return this._authors;
  }

  /** Gets the keywords associated with the item. */
  get keywords() {
    return this._keywords;
  }

  /** Gets the abstract or summary. */
  get abstractText() {
    return this._abstractText;
  }

  /** Gets the publication date. */
  get publicationDate() {
    return this._publicationDate;
  }

  /** Gets the page range. */
  get pages() {
    return this._pages;
  }

  /** Gets the publisher name. */
  get publisher() {
    return this._publisher;
  }

  /**
   * Validates the integrity of the bibliographic item.
   *
   * This method performs defensive programming checks to ensure that
   * all required fields contain valid values. Subclasses may extend
   * this method to validate their own additional fields.
   *
   * @throws Error if any required field is missing or invalid.
   */
  public validate(): void {
    if (!this._title || this._title.trim().length === 0) {
      throw new Error("Invalid bibliographic item: title cannot be empty.");
    }
    if (!Array.isArray(this._authors) || this._authors.length === 0) {
      throw new Error(
        "Invalid bibliographic item: at least one author is required.",
      );
    }
    if (!Array.isArray(this._keywords) || this._keywords.length === 0) {
      throw new Error(
        "Invalid bibliographic item: at least one keyword is required.",
      );
    }
    if (!this._abstractText || this._abstractText.trim().length === 0) {
      throw new Error("Invalid bibliographic item: abstract cannot be empty.");
    }
    if (
      !(this._publicationDate instanceof Date) ||
      isNaN(this._publicationDate.getTime())
    ) {
      throw new Error(
        "Invalid bibliographic item: publicationDate must be a valid Date.",
      );
    }
    if (!this._pages || this._pages.trim().length === 0) {
      throw new Error("Invalid bibliographic item: pages cannot be empty.");
    }
    if (!this._publisher || this._publisher.trim().length === 0) {
      throw new Error("Invalid bibliographic item: publisher cannot be empty.");
    }
  }

  /**
   * Formats the list of authors in IEEE style.
   *
   * Examples:
   * - `"A. Smith"`
   * - `"A. Smith and B. Jones"`
   * - `"A. Smith, B. Jones, and C. Brown"`
   *
   * This method is protected so subclasses can use it when generating
   * their IEEE reference.
   *
   * @returns A string containing the formatted list of authors.
   */
  protected formatAuthorsIEEE(): string {
    const authors = this._authors;

    if (authors.length === 0) return "";
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;

    let result = "";
    for (let i = 0; i < authors.length; i++) {
      if (i === authors.length - 1) {
        result += `and ${authors[i]}`;
      } else {
        result += `${authors[i]}, `;
      }
    }
    return result;
  }

  /**
   * Generates the IEEE reference for the bibliographic item.
   * Each subclass must implement its own version depending on its type.
   *
   * @returns The formatted IEEE reference.
   */
  public abstract toIEEE(): string;
}
