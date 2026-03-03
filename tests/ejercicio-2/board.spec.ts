import { describe, test, expect } from "vitest";
import { Board } from "../../src/ejercicio-2/Board";

describe("Board", () => {
  test("drops a piece in the lowest available row", () => {
    const b = new Board();
    b.dropPiece(0, "X");
    expect(b.getGrid()[5][0]).toBe("X");
  });

  test("fills a column and detects it as full", () => {
    const b = new Board();
    for (let i = 0; i < 6; i++) b.dropPiece(0, "X");
    expect(b.isColumnFull(0)).toBe(true);
  });

  test("dropPiece returns false if column is full", () => {
    const b = new Board();
    for (let i = 0; i < 6; i++) b.dropPiece(0, "X");
    expect(b.dropPiece(0, "O")).toBe(false);
  });

  test("throws if column is out of bounds", () => {
    const b = new Board();
    expect(() => b.dropPiece(-1, "X")).toThrow();
    expect(() => b.dropPiece(7, "X")).toThrow();
  });

  test("throws if piece is invalid", () => {
    const b = new Board();
    expect(() => b.dropPiece(0, "Z")).toThrow("Piece must be 'X' or 'O'");
  });

  test("detects horizontal win", () => {
    const b = new Board();
    b.dropPiece(0, "X");
    b.dropPiece(1, "X");
    b.dropPiece(2, "X");
    b.dropPiece(3, "X");
    expect(b.checkWin("X")).toBe(true);
  });

  test("detects vertical win", () => {
    const b = new Board();
    b.dropPiece(0, "X");
    b.dropPiece(0, "X");
    b.dropPiece(0, "X");
    b.dropPiece(0, "X");
    expect(b.checkWin("X")).toBe(true);
  });

  test("detects diagonal win ↘", () => {
    const b = new Board();

    // Construimos una diagonal manualmente
    b.dropPiece(0, "X");

    b.dropPiece(1, "O");
    b.dropPiece(1, "X");

    b.dropPiece(2, "O");
    b.dropPiece(2, "O");
    b.dropPiece(2, "X");

    b.dropPiece(3, "O");
    b.dropPiece(3, "O");
    b.dropPiece(3, "O");
    b.dropPiece(3, "X");

    expect(b.checkWin("X")).toBe(true);
  });

  test("detects diagonal win ↙", () => {
    const b = new Board();

    b.dropPiece(3, "X");

    b.dropPiece(2, "O");
    b.dropPiece(2, "X");

    b.dropPiece(1, "O");
    b.dropPiece(1, "O");
    b.dropPiece(1, "X");

    b.dropPiece(0, "O");
    b.dropPiece(0, "O");
    b.dropPiece(0, "O");
    b.dropPiece(0, "X");

    expect(b.checkWin("X")).toBe(true);
  });
});
