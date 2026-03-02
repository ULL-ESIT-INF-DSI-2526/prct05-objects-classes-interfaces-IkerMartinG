import * as readline from "readline";
import { GameEngine } from "./GameEngine";

/**
 * Console UI for Connect 4.
 */
export class Game {
  private engine = new GameEngine();

  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  start(): void {
    console.log("¡Bienvenido a Conecta 4!");
    this.engine.getBoard().printBoard();
    this.nextTurn();
  }

  private nextTurn(): void {
    const player = this.engine.getCurrentPlayer();
    console.log(`Turno de ${player.name} (${player.piece})`);

    this.rl.question("Selecciona una columna (0-6): ", input => {
      const col = Number(input);

      try {
        const result = this.engine.playTurn(col);

        if (!result.success) {
          console.log("La columna está completa. Elige otra.");
          return this.nextTurn();
        }

        this.engine.getBoard().printBoard();

        if (result.winner) {
          console.log(`🎉 ¡${player.name} ha ganado!`);
          this.rl.close();
          return;
        }

        this.nextTurn();
      } catch (err) {
        console.log("Error:", (err as Error).message);
        this.nextTurn();
      }
    });
  }
}
