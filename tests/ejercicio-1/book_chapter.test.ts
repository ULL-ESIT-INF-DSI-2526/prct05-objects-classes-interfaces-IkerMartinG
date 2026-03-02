import { describe, test, expect } from "vitest";
import { BookChapter } from "../../src/ejercicio-1/BookChapter";

describe("BookChapter", () => {
  test("should store editors correctly", () => {
    const chapter = new BookChapter(
      "Advanced Algorithms",
      ["Fernando Ruiz"],
      ["Algorithms"],
      "Abstract",
      new Date("2019-01-01"),
      "200-230",
      "MIT Press",
      "Advanced Topics in CS",
      ["Laura Gómez", "Miguel Santos"],
      "2nd",
      "978-3-16-148410-0"
    );

    expect(chapter.editors).toContain("Laura Gómez");
  });

  test("should generate correct IEEE format", () => {
    const chapter = new BookChapter(
      "Advanced Algorithms",
      ["Fernando Ruiz"],
      ["Algorithms"],
      "Abstract",
      new Date("2019-01-01"),
      "200-230",
      "MIT Press",
      "Advanced Topics in CS",
      ["Laura Gómez"],
      "2nd"
    );

    const ieee = chapter.toIEEE();
    expect(ieee).toContain("Advanced Algorithms");
    expect(ieee).toContain("Advanced Topics in CS");
    expect(ieee).toContain("MIT Press");
  });

  test("should throw error if keywords are empty", () => {
    expect(() => {
      new BookChapter(
        "Title",
        ["Author"],
        [],
        "Abstract",
        new Date(),
        "10-20",
        "Publisher",
        "Book Title",
        ["Editor"]
      );
    }).toThrow("at least one keyword is required");
  });
});
