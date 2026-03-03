import { describe, test, expect } from "vitest";
import { Board } from "../../src/ejercicio-2/Board";
import { Player } from "../../src/ejercicio-2/Player";

describe("Integration: Board + Players", () => {
  test("players alternate placing pieces", () => {
    const b = new Board();
    const p1 = new Player("P1", "X");
    const p2 = new Player("P2", "O");

    b.dropPiece(0, p1.piece);
    b.dropPiece(0, p2.piece);

    expect(b.getGrid()[5][0]).toBe("X");
    expect(b.getGrid()[4][0]).toBe("O");
  });

  test("player wins with 4 in a row", () => {
    const b = new Board();
    const p = new Player("P1", "X");

    b.dropPiece(0, p.piece);
    b.dropPiece(1, p.piece);
    b.dropPiece(2, p.piece);
    b.dropPiece(3, p.piece);

    expect(b.checkWin("X")).toBe(true);
  });
});
