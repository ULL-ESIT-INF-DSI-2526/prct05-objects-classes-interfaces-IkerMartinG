import { describe, test, expect } from "vitest";
import { JournalArticle } from "../../src/ejercicio-1/JournalArticle";

describe("JournalArticle", () => {
  test("should create a valid journal article", () => {
    const article = new JournalArticle(
      "Deep Learning for Cats",
      ["Alice Smith", "Bob Johnson"],
      ["AI", "Cats"],
      "A study on feline recognition.",
      new Date("2020-05-10"),
      "10-20",
      "Elsevier",
      "Journal of Feline AI",
      12,
      3
    );

    expect(article.title).toBe("Deep Learning for Cats");
    expect(article.journalName).toBe("Journal of Feline AI");
  });

  test("should generate correct IEEE format", () => {
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

    const ieee = article.toIEEE();
    expect(ieee).toContain("Deep Learning for Cats");
    expect(ieee).toContain("Journal of Feline AI");
    expect(ieee).toContain("vol. 12");
  });

  test("should throw error if title is empty", () => {
    expect(() => {
      new JournalArticle(
        "",
        ["Alice Smith"],
        ["AI"],
        "Abstract",
        new Date(),
        "10-20",
        "Elsevier",
        "Journal",
        1,
        1
      );
    }).toThrow("title cannot be empty");
  });
});
