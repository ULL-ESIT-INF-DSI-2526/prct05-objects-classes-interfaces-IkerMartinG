import { describe, test, expect } from "vitest";
import { Step } from "../../src/ejercicio-3/Step";

describe("Step", () => {
  test("creates a valid step", () => {
    const s = new Step("Cortar verduras", 60, ["prep"], false, 3);
    expect(s.name).toBe("Cortar verduras");
  });

  test("throws on invalid duration", () => {
    expect(() => new Step("Cortar", 0, ["prep"], false, 0)).toThrow();
  });

  test("throws on empty name", () => {
    expect(() => new Step("", 60, ["prep"], false, 0)).toThrow();
  });

  test("throws on invalid tags", () => {
    // @ts-ignore
    expect(() => new Step("Cortar", 60, null, false, 0)).toThrow();
  });
});
