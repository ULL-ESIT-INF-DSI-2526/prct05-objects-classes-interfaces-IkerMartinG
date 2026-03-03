import { describe, test, expect } from "vitest";
import { Player } from "../../src/ejercicio-2/Player";

describe("Player", () => {
  test("should create a valid player", () => {
    const p = new Player("Iker", "X");
    expect(p.name).toBe("Iker");
    expect(p.piece).toBe("X");
  });

  test("should throw on invalid piece", () => {
    expect(() => new Player("Iker", "Z")).toThrow();
  });

  test("should throw on empty name", () => {
    expect(() => new Player("", "X")).toThrow();
  });
});
