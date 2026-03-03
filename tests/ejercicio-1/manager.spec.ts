import { describe, test, expect, vi, beforeEach } from "vitest";
import { BibliographyManager } from "../../src/ejercicio-1/BibliographyManager";
import { JournalArticle } from "../../src/ejercicio-1/JournalArticle";

describe("BibliographyManager – extended coverage", () => {
  let manager: BibliographyManager;
  let article: JournalArticle;

  beforeEach(() => {
    manager = new BibliographyManager();

    article = new JournalArticle(
      "Deep Learning",
      ["Alice Smith"],
      ["AI", "ML"],
      "Abstract text",
      new Date("2020-01-01"),
      "1-10",
      "IEEE",
      "Journal of AI",
      10,
      2
    );

    manager.addItem(article);
  });

  test("showAll calls console.table", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    manager.showAll();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("showResults calls console.table", () => {
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});
    manager.showResults([article]);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("searchByTitle returns correct results", () => {
    const results = manager.searchByTitle("Deep");
    expect(results.length).toBe(1);
  });

  test("searchByTitle returns empty array when no match", () => {
    const results = manager.searchByTitle("NoExiste");
    expect(results.length).toBe(0);
  });

  test("searchByAuthor returns correct results", () => {
    const results = manager.searchByAuthor("Alice");
    expect(results.length).toBe(1);
  });

  test("searchByAuthor returns empty array", () => {
    const results = manager.searchByAuthor("Bob");
    expect(results.length).toBe(0);
  });

  test("searchByPublisher returns correct results", () => {
    const results = manager.searchByPublisher("IEEE");
    expect(results.length).toBe(1);
  });

  test("searchByPublisher returns empty array", () => {
    const results = manager.searchByPublisher("Elsevier");
    expect(results.length).toBe(0);
  });

  test("searchByYear returns correct results", () => {
    const results = manager.searchByYear(2020);
    expect(results.length).toBe(1);
  });

  test("searchByYear returns empty array", () => {
    const results = manager.searchByYear(1999);
    expect(results.length).toBe(0);
  });

  test("searchByKeyword returns correct results", () => {
    const results = manager.searchByKeyword("AI");
    expect(results.length).toBe(1);
  });

  test("searchByKeyword returns empty array", () => {
    const results = manager.searchByKeyword("Quantum");
    expect(results.length).toBe(0);
  });

  test("exportIEEE returns correct format for one item", () => {
    const ieee = manager.exportIEEE([article]);
    expect(ieee).toContain("Deep Learning");
  });

  test("exportIEEE returns empty string for empty array", () => {
    const ieee = manager.exportIEEE([]);
    expect(ieee).toBe("");
  });
});
