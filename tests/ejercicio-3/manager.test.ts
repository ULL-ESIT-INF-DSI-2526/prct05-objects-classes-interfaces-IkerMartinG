import { describe, test, expect, vi } from "vitest";
import { CookbookManager } from "../../src/ejercicio-3/CookbookManager";
import { Chef } from "../../src/ejercicio-3/Chef";
import { Recipe } from "../../src/ejercicio-3/Recipe";
import { Step } from "../../src/ejercicio-3/Step";

describe("CookbookManager extended coverage", () => {
  const step = new Step("Cortar", 60, ["prep"], false, 1);
  const recipe = new Recipe("Tarta", 2020, [step]);
  const chef = new Chef("Iker", 1000, [recipe]);

  test("showChefs calls console.table", () => {
    const m = new CookbookManager();
    m.addChef(chef);

    const spy = vi.spyOn(console, "table").mockImplementation(() => {});

    m.showChefs();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("showRecipes calls console.table", () => {
    const m = new CookbookManager();
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});

    m.showRecipes([recipe]);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("showSteps calls console.table", () => {
    const m = new CookbookManager();
    const spy = vi.spyOn(console, "table").mockImplementation(() => {});

    m.showSteps([step]);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("searchChefs returns empty array when no match", () => {
    const m = new CookbookManager();
    m.addChef(chef);

    const results = m.searchChefs("NoExiste");
    expect(results.length).toBe(0);
  });
});
