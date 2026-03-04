import { Animal } from "./Animal";

/**
 * Representa un gato del refugio.
 */
export class Gato extends Animal {
  private _pelaje: string;
  private _interior: boolean;

  /**
   * Crea un nuevo Animal.
   *
   * @param microchip - Identidificador unico del gato.
   * @param nombre - Nombre del gato.
   * @param edad - Edad de gato.
   * @param peso - Peso del gato.
   * @param salud - Estado de salid del gato.
   * @param pelaje - Tipo de pelaje del gato.
   * @param interior - Tipo de gato (interior/exterior).
   */
  constructor(
    microchip: string,
    nombre: string,
    edad: number,
    peso: number,
    salud: string,
    pelaje: string,
    interior: boolean,
  ) {
    super(microchip, nombre, edad, peso, salud);
    this._pelaje = pelaje;
    this._interior = interior;
    this.validateGato();
  }
  /** Getter tipo de pelaje del gato */
  get pelaje() {
    return this._pelaje;
  }
  /** Getter tipo de gato */
  get interior() {
    return this._interior;
  }
  /** Validacion de las caracteristicas especificas de un gato */
  private validateGato(): void {
    if (!this._pelaje.trim()) throw new Error("Pelaje inválido.");
  }

  /**
   * Devuelve la ficha de un gato
   * @returns Información correspondiente al gato.
   */
  public obtenerFicha(): string {
    return `Gato ${this.nombre} (${this.pelaje}) - Interior: ${this.interior}`;
  }
}
