/**
 * Represents the 6x7 Connect 4 board.
 */
export class Board {
  private readonly rows = 6;
  private readonly cols = 7;
  private grid: string[][];

  constructor() {
    this.grid = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(" ")
    );
  }

  /**
   * Attempts to drop a piece into a column.
   * @param col - Column index (0–6).
   * @param piece - Player piece ("X" or "O").
   * @returns true if successful, false if column is full.
   */
  public dropPiece(col: number, piece: string): boolean {
    if (col < 0 || col >= this.cols) {
      throw new Error(`Column ${col} is out of bounds.`);
    }
    if (piece !== "X" && piece !== "O") {
      throw new Error("Piece must be 'X' or 'O'.");
    }
    if (this.isColumnFull(col)) return false;

    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.grid[row][col] === " ") {
        this.grid[row][col] = piece;
        return true;
      }
    }
    return false;
  }

  /** Checks if a column is full. */
  public isColumnFull(col: number): boolean {
    if (col < 0 || col >= this.cols) {
      throw new Error(`Column ${col} is out of bounds.`);
    }
    return this.grid[0][col] !== " ";
  }

  /** Prints the board to the console. */
  public printBoard(): void {
    console.log("\nCurrent Board:");
    this.grid.forEach(row => console.log("| " + row.join(" | ") + " |"));
    console.log("  0   1   2   3   4   5   6\n");
  }

  /** Checks if a player has won. */
  public checkWin(piece: string): boolean {
    // Horizontal
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols - 3; c++) {
        if (
          this.grid[r][c] === piece &&
          this.grid[r][c + 1] === piece &&
          this.grid[r][c + 2] === piece &&
          this.grid[r][c + 3] === piece
        ) return true;
      }
    }

    // Vertical
    for (let r = 0; r < this.rows - 3; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (
          this.grid[r][c] === piece &&
          this.grid[r + 1][c] === piece &&
          this.grid[r + 2][c] === piece &&
          this.grid[r + 3][c] === piece
        ) return true;
      }
    }

    // Diagonal ↘
    for (let r = 0; r < this.rows - 3; r++) {
      for (let c = 0; c < this.cols - 3; c++) {
        if (
          this.grid[r][c] === piece &&
          this.grid[r + 1][c + 1] === piece &&
          this.grid[r + 2][c + 2] === piece &&
          this.grid[r + 3][c + 3] === piece
        ) return true;
      }
    }

    // Diagonal ↙
    for (let r = 3; r < this.rows; r++) {
      for (let c = 0; c < this.cols - 3; c++) {
        if (
          this.grid[r][c] === piece &&
          this.grid[r - 1][c + 1] === piece &&
          this.grid[r - 2][c + 2] === piece &&
          this.grid[r - 3][c + 3] === piece
        ) return true;
      }
    }

    return false;
  }

  /** Returns the internal grid (for testing). */
  public getGrid(): string[][] {
    return this.grid;
  }
}
