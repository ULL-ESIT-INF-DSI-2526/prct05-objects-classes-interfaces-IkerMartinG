import { IPlayer } from "./IPlayer";

/**
 * Represents a Connect 4 player.
 */
export class Player implements IPlayer {
  /**
   * Creates a new player.
   * @param name - Player name.
   * @param piece - Piece symbol ("X" or "O").
   */
  constructor(
    public readonly name: string,
    public readonly piece: string
  ) {
    if (!name.trim()) {
      throw new Error("Player name cannot be empty.");
    }
    if (piece !== "X" && piece !== "O") {
      throw new Error("Player piece must be 'X' or 'O'.");
    }
  }
}
