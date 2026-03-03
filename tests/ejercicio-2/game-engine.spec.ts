import { describe, test, expect } from "vitest";
import { GameEngine } from "../../src/ejercicio-2/GameEngine";

describe("GameEngine", () => {
  test("initial player is Player 1", () => {
    const g = new GameEngine();
    expect(g.getCurrentPlayer().piece).toBe("X");
  });

  test("validateColumn works", () => {
    const g = new GameEngine();
    expect(g.validateColumn(3)).toBe(true);
    expect(g.validateColumn(-1)).toBe(false);
    expect(g.validateColumn(7)).toBe(false);
  });

  test("playTurn places a piece", () => {
    const g = new GameEngine();
    const result = g.playTurn(0);
    expect(result.success).toBe(true);
  });

  test("playTurn switches players", () => {
    const g = new GameEngine();
    g.playTurn(0);
    expect(g.getCurrentPlayer().piece).toBe("O");
  });

  test("playTurn detects full column", () => {
    const g = new GameEngine();
    for (let i = 0; i < 6; i++) g.playTurn(0);
    const result = g.playTurn(0);
    expect(result.success).toBe(false);
  });

  test("playTurn detects win", () => {
    const g = new GameEngine();
    g.playTurn(0);
    g.playTurn(1);
    g.playTurn(0);
    g.playTurn(1);
    g.playTurn(0);
    g.playTurn(1);
    const result = g.playTurn(0);
    expect(result.winner).toBe(true);
  });

  test("invalid column throws", () => {
    const g = new GameEngine();
    expect(() => g.playTurn(10)).toThrow();
  });
});
