import { describe, test, expect } from "vitest";
import { Refugio } from "../../src/modi/Refugio";
import { Perro } from "../../src/modi/Perro";
import { Gato } from "../../src/modi/Gato";

describe("Refugio", () => {
  test("crea refugio válido", () => {
    const r = new Refugio(2, 3);
    expect(r.plazasPerrosDisponibles).toBe(2);
    expect(r.plazasGatosDisponibles).toBe(3);
  });

  test("ingresar y adoptar perro", () => {
    const r = new Refugio(1, 1);
    const p = new Perro("111", "Rex", 4, 20, "Sano", "Pastor", "Alta");

    r.ingresarPerro(p);
    expect(r.perros.length).toBe(1);

    r.adoptarPerro("111");
    expect(r.perros.length).toBe(0);
  });

  test("ingresar y adoptar gato", () => {
    const r = new Refugio(1, 1);
    const g = new Gato("222", "Misu", 2, 5, "Sano", "Corto", true);

    r.ingresarGato(g);
    expect(r.gatos.length).toBe(1);

    r.adoptarGato("222");
    expect(r.gatos.length).toBe(0);
  });

  test("errores de plazas", () => {
    const r = new Refugio(1, 1);
    r.ingresarPerro(new Perro("111", "Rex", 4, 20, "Sano", "Pastor", "Alta"));
    expect(() =>
      r.ingresarPerro(new Perro("112", "Max", 3, 18, "Sano", "Labrador", "Media"))
    ).toThrow();
  });

  test("buscar animal", () => {
    const r = new Refugio(1, 1);
    const p = new Perro("111", "Rex", 4, 20, "Sano", "Pastor", "Alta");
    r.ingresarPerro(p);

    expect(r.buscar("111")).toBe(p);
    expect(r.buscar("999")).toBeUndefined();
  });
});
