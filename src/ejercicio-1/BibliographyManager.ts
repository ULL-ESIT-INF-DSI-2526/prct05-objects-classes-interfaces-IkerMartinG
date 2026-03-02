import { IBibliographicItem } from "./IBibliographicItem";

/**
 * Manages a collection of bibliographic items.
 *
 * This class provides functionality to:
 * - Store multiple bibliographic items.
 * - Display them in a table format.
 * - Search by keywords, title, authors, publication date, or publisher.
 * - Export search results in IEEE format.
 *
 * It is designed to work with any class implementing {@link IBibliographicItem}.
 */
export class BibliographyManager {
  /**
   * Internal storage of bibliographic items.
   */
  private _items: IBibliographicItem[] = [];

  /**
   * Adds a new bibliographic item to the manager.
   *
   * @param item - The bibliographic item to add.
   */
  public addItem(item: IBibliographicItem): void {
    this._items.push(item);
  }

  /**
   * Gets all stored bibliographic items.
   */
  public get items(): IBibliographicItem[] {
    return this._items;
  }

  /**
   * Displays all stored items in a table format using console.table.
   *
   * Only the most relevant fields are shown for readability.
   */
  public showAll(): void {
    const tableData = this._items.map(item => ({
      Title: item.title,
      Authors: item.authors.join(", "),
      Keywords: item.keywords.join(", "),
      Publisher: item.publisher,
      PublicationDate: item.publicationDate.toDateString(),
      Pages: item.pages
    }));

    console.table(tableData);
  }

  /**
   * Searches for items containing a given keyword in their keyword list.
   *
   * @param keyword - The keyword to search for.
   * @returns An array of matching bibliographic items.
   */
  public searchByKeyword(keyword: string): IBibliographicItem[] {
    return this._items.filter(item =>
      item.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
    );
  }

  /**
   * Searches for items whose title contains the given text.
   *
   * @param title - The text to search for in titles.
   * @returns An array of matching bibliographic items.
   */
  public searchByTitle(title: string): IBibliographicItem[] {
    return this._items.filter(item =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  /**
   * Searches for items whose authors include the given name.
   *
   * @param author - The author name to search for.
   * @returns An array of matching bibliographic items.
   */
  public searchByAuthor(author: string): IBibliographicItem[] {
    return this._items.filter(item =>
      item.authors.some(a => a.toLowerCase().includes(author.toLowerCase()))
    );
  }

  /**
   * Searches for items published by a given publisher.
   *
   * @param publisher - The publisher name to search for.
   * @returns An array of matching bibliographic items.
   */
  public searchByPublisher(publisher: string): IBibliographicItem[] {
    return this._items.filter(item =>
      item.publisher.toLowerCase().includes(publisher.toLowerCase())
    );
  }

  /**
   * Searches for items published in a specific year.
   *
   * @param year - The publication year to search for.
   * @returns An array of matching bibliographic items.
   */
  public searchByYear(year: number): IBibliographicItem[] {
    return this._items.filter(item =>
      item.publicationDate.getFullYear() === year
    );
  }

  /**
   * Displays the results of a search in table format.
   *
   * @param results - The array of bibliographic items to display.
   */
  public showResults(results: IBibliographicItem[]): void {
    const tableData = results.map(item => ({
      Title: item.title,
      Authors: item.authors.join(", "),
      Keywords: item.keywords.join(", "),
      Publisher: item.publisher,
      PublicationDate: item.publicationDate.toDateString(),
      Pages: item.pages
    }));

    console.table(tableData);
  }

  /**
   * Exports the results of a search in IEEE format.
   *
   * @param results - The array of bibliographic items to export.
   * @returns A string containing all IEEE references separated by new lines.
   */
  public exportIEEE(results: IBibliographicItem[]): string {
    return results.map(item => item.toIEEE()).join("\n");
  }
}
