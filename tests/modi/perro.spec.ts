import { describe, test, expect } from "vitest";
import { Perro } from "../../src/modi/Perro";

describe("Perro", () => {
  test("crea perro válido", () => {
    const p = new Perro("111", "Rex", 4, 20, "Sano", "Pastor", "Alta");
    expect(p.raza).toBe("Pastor");
    expect(p.actividad).toBe("Alta");
    expect(p.obtenerFicha()).toContain("Perro Rex");
  });

  test("errores", () => {
    expect(() => new Perro("111", "Rex", 4, 20, "Sano", "", "Alta")).toThrow();
    expect(() => new Perro("111", "Rex", 4, 20, "Sano", "Pastor", "")).toThrow();
  });
});
