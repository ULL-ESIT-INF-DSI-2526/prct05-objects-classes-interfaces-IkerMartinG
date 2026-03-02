import { describe, test, expect } from "vitest";
import { Chef } from "../../src/ejercicio-3/Chef";
import { Recipe } from "../../src/ejercicio-3/Recipe";
import { Step } from "../../src/ejercicio-3/Step";

describe("Chef", () => {
  const recipe = new Recipe("Tarta", 2020, [
    new Step("Cortar", 60, ["prep"], false, 1)
  ]);

  test("creates a valid chef", () => {
    const c = new Chef("Iker", 1000, [recipe]);
    expect(c.name).toBe("Iker");
  });

  test("throws on negative followers", () => {
    expect(() => new Chef("Iker", -1, [recipe])).toThrow();
  });
});
