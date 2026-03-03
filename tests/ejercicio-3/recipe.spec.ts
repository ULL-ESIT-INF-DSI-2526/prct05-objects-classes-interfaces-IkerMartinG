import { describe, test, expect } from "vitest";
import { Recipe } from "../../src/ejercicio-3/Recipe";
import { Step } from "../../src/ejercicio-3/Step";

describe("Recipe", () => {
  const steps = [
    new Step("Cortar", 60, ["prep"], false, 1),
    new Step("Hornear", 300, ["cook"], true, 0)
  ];

  test("creates a valid recipe", () => {
    const r = new Recipe("Tarta", 2020, steps);
    expect(r.getStepCount()).toBe(2);
  });

  test("throws on invalid year", () => {
    expect(() => new Recipe("Tarta", 1800, steps)).toThrow();
  });

  test("throws on empty name", () => {
    expect(() => new Recipe("", 2020, steps)).toThrow();
  });
});
