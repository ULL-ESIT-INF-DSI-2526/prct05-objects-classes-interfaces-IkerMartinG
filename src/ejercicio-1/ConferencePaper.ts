import { BaseBibliographicItem } from "./BaseBibliographicItem";

/**
 * Represents a conference paper (contribución a congreso).
 *
 * A conference paper is a bibliographic item presented at an academic conference.
 * In addition to the common bibliographic fields inherited from
 * {@link BaseBibliographicItem}, it includes:
 *
 * - The name of the conference.
 * - The location where the conference took place.
 * - The date of the conference.
 *
 * This class implements the IEEE reference format for conference papers.
 */
export class ConferencePaper extends BaseBibliographicItem {
  /**
   * Name of the conference where the paper was presented.
   */
  private _conferenceName: string;

  /**
   * Location (city, country) of the conference.
   */
  private _conferenceLocation: string;

  /**
   * Date when the conference took place.
   */
  private _conferenceDate: Date;

  /**
   * Creates a new conference paper.
   *
   * @param title - Title of the paper.
   * @param authors - List of authors.
   * @param keywords - Keywords describing the work.
   * @param abstractText - Abstract or summary of the paper.
   * @param publicationDate - Date when the paper was published.
   * @param pages - Page range of the paper.
   * @param publisher - Publisher of the conference proceedings.
   * @param conferenceName - Name of the conference.
   * @param conferenceLocation - Location of the conference.
   * @param conferenceDate - Date of the conference.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstractText: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    conferenceName: string,
    conferenceLocation: string,
    conferenceDate: Date,
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

    this._conferenceName = conferenceName;
    this._conferenceLocation = conferenceLocation;
    this._conferenceDate = conferenceDate;
  }

  /**
   * Gets the name of the conference.
   */
  get conferenceName(): string {
    return this._conferenceName;
  }

  /**
   * Gets the location of the conference.
   */
  get conferenceLocation(): string {
    return this._conferenceLocation;
  }

  /**
   * Gets the date of the conference.
   */
  get conferenceDate(): Date {
    return this._conferenceDate;
  }

  /**
   * Generates the IEEE reference for this conference paper.
   *
   * IEEE format example:
   * ```
   * A. Author, "Paper Title", in Proceedings of the X Conference,
   * City, Year, pp. 10–15.
   * ```
   *
   * @returns The formatted IEEE reference as a string.
   */
  public toIEEE(): string {
    const year = this.conferenceDate.getFullYear();
    const authors = this.formatAuthorsIEEE();

    return `${authors}, "${this.title}", in ${this.conferenceName}, ${this.conferenceLocation}, ${year}, pp. ${this.pages}.`;
  }
}
