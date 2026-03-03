import { describe, test, expect } from "vitest";
import { CookbookManager } from "../../src/ejercicio-3/CookbookManager";
import { Chef } from "../../src/ejercicio-3/Chef";
import { Recipe } from "../../src/ejercicio-3/Recipe";
import { Step } from "../../src/ejercicio-3/Step";

describe("CookbookManager", () => {
  const steps = [new Step("Cortar", 60, ["prep"], false, 1)];
  const recipe = new Recipe("Tarta", 2020, steps);
  const chef = new Chef("Iker", 1000, [recipe]);

  test("adds a chef", () => {
    const m = new CookbookManager();
    m.addChef(chef);
    expect(m.searchChefs("Iker").length).toBe(1);
  });

  test("searches recipes", () => {
    const m = new CookbookManager();
    m.addChef(chef);
    expect(m.searchRecipes("Tarta").length).toBe(1);
  });

  test("searches steps by tag", () => {
    const m = new CookbookManager();
    m.addChef(chef);
    expect(m.searchSteps("prep").length).toBe(1);
  });
});
