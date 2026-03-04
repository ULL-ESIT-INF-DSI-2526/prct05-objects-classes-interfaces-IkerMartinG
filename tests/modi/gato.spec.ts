import { describe, test, expect } from "vitest";
import { Gato } from "../../src/modi/Gato";

describe("Gato", () => {
  test("crea gato válido", () => {
    const g = new Gato("222", "Misu", 2, 5, "Sano", "Corto", true);
    expect(g.pelaje).toBe("Corto");
    expect(g.interior).toBe(true);
    expect(g.obtenerFicha()).toContain("Gato Misu");
  });

  test("errores", () => {
    expect(() => new Gato("222", "Misu", 2, 5, "Sano", "", true)).toThrow();
  });
});