import { describe, test, expect } from "vitest";
import { Thesis } from "../../src/ejercicio-1/Thesis";

describe("Thesis", () => {
  test("should store university and type", () => {
    const thesis = new Thesis(
      "Optimización de Redes Neuronales",
      ["Iker Hernández"],
      ["AI"],
      "Abstract",
      new Date("2023-06-01"),
      "1-120",
      "ULL",
      "Universidad de La Laguna",
      "TFM",
      "Departamento de Ingeniería"
    );

    expect(thesis.university).toBe("Universidad de La Laguna");
    expect(thesis.thesisType).toBe("TFM");
  });

  test("should generate correct IEEE format", () => {
    const thesis = new Thesis(
      "Optimización de Redes Neuronales",
      ["Iker Hernández"],
      ["AI"],
      "Abstract",
      new Date("2023-06-01"),
      "1-120",
      "ULL",
      "Universidad de La Laguna",
      "TFM"
    );

    const ieee = thesis.toIEEE();
    expect(ieee).toContain("Optimización de Redes Neuronales");
    expect(ieee).toContain("Universidad de La Laguna");
    expect(ieee).toContain("2023");
  });

  test("should throw error if abstract is empty", () => {
    expect(() => {
      new Thesis(
        "Title",
        ["Author"],
        ["Keyword"],
        "",
        new Date(),
        "10-20",
        "Publisher",
        "University",
        "TFG"
      );
    }).toThrow("abstract cannot be empty");
  });
});
