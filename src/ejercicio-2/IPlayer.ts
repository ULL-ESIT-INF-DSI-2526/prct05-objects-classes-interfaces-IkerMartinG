/**
 * Represents a player in Connect 4.
 */
export interface IPlayer {
  readonly name: string;
  readonly piece: string; // "X" or "O"
}
