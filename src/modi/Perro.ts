import { Animal } from "./Animal";

/**
 * Representa un perro del refugio.
 */
export class Perro extends Animal {
  private _raza: string;
  private _actividad: string;
  /**
   * Crea un nuevo Animal.
   *
   * @param microchip - Identidificador unico del perro.
   * @param nombre - Nombre del perro.
   * @param edad - Edad de perro.
   * @param peso - Peso del perro.
   * @param salud - Estado de salid del perro.
   * @param raza - Raza del perro.
   * @param actividad - Actividad de perro.
   */
  constructor(
    microchip: string,
    nombre: string,
    edad: number,
    peso: number,
    salud: string,
    raza: string,
    actividad: string,
  ) {
    super(microchip, nombre, edad, peso, salud);
    this._raza = raza;
    this._actividad = actividad;
    this.validatePerro();
  }
  /** Getter de la raza del perro */
  get raza() {
    return this._raza;
  }
  /**  Getter de la actividad del perro */
  get actividad() {
    return this._actividad;
  }
  /** Validacion de las caracteristicas especificas de un perro */
  private validatePerro(): void {
    if (!this._raza.trim()) throw new Error("Raza inválida.");
    if (!this._actividad.trim()) throw new Error("Actividad inválida.");
  }

  /**
   * Devuelve la ficha de un gato
   * @returns Información correspondiente al gato.
   */
  public obtenerFicha(): string {
    return `Perro ${this.nombre} (${this.raza}) - Salud: ${this.salud}`;
  }
}
