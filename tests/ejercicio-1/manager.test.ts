import { describe, test, expect } from "vitest";
import { BibliographyManager } from "../../src/ejercicio-1/BibliographyManager";
import { JournalArticle } from "../../src/ejercicio-1/JournalArticle";

describe("BibliographyManager", () => {
  const manager = new BibliographyManager();

  const article = new JournalArticle(
    "Deep Learning for Cats",
    ["Alice Smith"],
    ["AI"],
    "Abstract",
    new Date("2020-05-10"),
    "10-20",
    "Elsevier",
    "Journal of Feline AI",
    12,
    3
  );

  manager.addItem(article);

  test("should store items", () => {
    expect(manager.items.length).toBe(1);
  });

  test("should search by keyword", () => {
    const results = manager.searchByKeyword("AI");
    expect(results.length).toBe(1);
  });

  test("should search by title", () => {
    const results = manager.searchByTitle("Cats");
    expect(results.length).toBe(1);
  });

  test("should export IEEE", () => {
    const ieee = manager.exportIEEE(manager.items);
    expect(ieee).toContain("Deep Learning for Cats");
  });
});
