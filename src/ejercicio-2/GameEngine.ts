import { Board } from "./Board";
import { Player } from "./Player";

/**
 * Pure game logic for Connect 4.
 * No console, no readline → fully testable.
 */
export class GameEngine {
  private board = new Board();
  private players: Player[];
  private currentPlayerIndex = 0;

  constructor() {
    this.players = [
      new Player("Jugador 1", "X"),
      new Player("Jugador 2", "O")
    ];
  }

  /** Returns the current player */
  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  /** Validates a column input */
  validateColumn(col: number): boolean {
    return col >= 0 && col <= 6;
  }

  /** Attempts to play a turn */
  playTurn(col: number): { success: boolean; winner: boolean } {
    if (!this.validateColumn(col)) {
      throw new Error("Invalid column.");
    }

    const player = this.getCurrentPlayer();
    const success = this.board.dropPiece(col, player.piece);

    if (!success) return { success: false, winner: false };

    const winner = this.board.checkWin(player.piece);

    if (!winner) {
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }

    return { success, winner };
  }

  /** Exposes board for testing */
  getBoard() {
    return this.board;
  }
}
