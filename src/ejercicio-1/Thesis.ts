import { BaseBibliographicItem } from "./BaseBibliographicItem";

/**
 * Represents an academic thesis (TFG, TFM, or PhD thesis).
 *
 * A thesis is a bibliographic item submitted as part of an academic degree.
 * In addition to the common bibliographic fields inherited from
 * {@link BaseBibliographicItem}, it includes:
 *
 * - The university where the thesis was submitted.
 * - The academic degree or thesis type (e.g., TFG, TFM, PhD).
 * - The department or faculty (optional).
 *
 * This class implements the IEEE reference format for theses.
 */
export class Thesis extends BaseBibliographicItem {
  /**
   * University where the thesis was submitted.
   */
  private _university: string;

  /**
   * Type of thesis (e.g., "Bachelor's Thesis", "Master's Thesis", "PhD Thesis").
   */
  private _thesisType: string;

  /**
   * Department or faculty (optional).
   */
  private _department?: string;

  /**
   * Creates a new thesis.
   *
   * @param title - Title of the thesis.
   * @param authors - Author(s) of the thesis.
   * @param keywords - Keywords describing the thesis.
   * @param abstractText - Abstract or summary.
   * @param publicationDate - Date when the thesis was submitted.
   * @param pages - Page range.
   * @param publisher - Publisher or institution (often same as university).
   * @param university - University where the thesis was submitted.
   * @param thesisType - Type of thesis (TFG, TFM, PhD).
   * @param department - Department or faculty (optional).
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    abstractText: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    university: string,
    thesisType: string,
    department?: string
  ) {
    super(
      title,
      authors,
      keywords,
      abstractText,
      publicationDate,
      pages,
      publisher
    );

    this._university = university;
    this._thesisType = thesisType;
    this._department = department;
  }

  /**
   * Gets the university where the thesis was submitted.
   */
  get university(): string {
    return this._university;
  }

  /**
   * Gets the type of thesis (TFG, TFM, PhD).
   */
  get thesisType(): string {
    return this._thesisType;
  }

  /**
   * Gets the department or faculty (optional).
   */
  get department(): string | undefined {
    return this._department;
  }

  /**
   * Generates the IEEE reference for this thesis.
   *
   * IEEE format example:
   * ```
   * A. Author, "Thesis Title", Master's Thesis, University of X, 2020.
   * ```
   *
   * @returns The formatted IEEE reference as a string.
   */
  public toIEEE(): string {
    const year = this.publicationDate.getFullYear();
    const authors = this.formatAuthorsIEEE();

    const departmentPart = this._department ? `${this._department}, ` : "";

    return `${authors}, "${this.title}", ${this.thesisType}, ${departmentPart}${this.university}, ${year}.`;
  }
}
