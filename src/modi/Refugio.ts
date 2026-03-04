import { Perro } from "./Perro";
import { Gato } from "./Gato";

/**
 * Representa el refugio de animales.
 * Controla plazas, ingresos, adopciones y búsquedas.
 */
export class Refugio {
  private _perros: { animal: Perro; ingreso: Date; salida: Date }[];
  private _gatos: { animal: Gato; ingreso: Date; salida: Date }[];
  private _maxPerros: number;
  private _maxGatos: number;

  constructor(maxPerros: number, maxGatos: number) {
    if (maxPerros <= 0 || maxGatos <= 0) throw new Error("Capacidad inválida.");

    this._perros = [];
    this._gatos = [];
    this._maxPerros = maxPerros;
    this._maxGatos = maxGatos;
  }

  /** Getter de los perros del refugio */
  get perros(): Perro[] {
    return this._perros
      .filter((p) => p.salida === undefined)
      .map((p) => p.animal);
  }
  /** Getter de los gatos del refugio */
  get gatos(): Gato[] {
    return this._gatos
      .filter((p) => p.salida === undefined)
      .map((g) => g.animal);
  }
  /** Muestra todas las plazas disponibles para los perros
   *  dentro del refugio.
   *
   * @returns Plazas disponibles para los perros como un valor numerico.
   */
  get plazasPerrosDisponibles(): number {
    return (
      this._maxPerros -
      this._perros.filter((p) => p.salida === undefined).length
    );
  }

  /** Muestra todas las plazas disponibles para los gatos
   *  dentro del refugio.
   *
   * @returns Plazas disponibles para los gatos como un valor numerico.
   */
  get plazasGatosDisponibles(): number {
    return (
      this._maxGatos - this._gatos.filter((p) => p.salida === undefined).length
    );
  }

  /** Registra el ingreso de un perro dentro de refugio */
  public ingresarPerro(p: Perro): void {
    if (this.plazasPerrosDisponibles <= 0)
      throw new Error("No hay plazas para perros.");
    this._perros.push({ animal: p, ingreso: new Date(), salida: undefined });
  }

  /** Registra el ingreso de un gato */
  public ingresarGato(g: Gato): void {
    if (this.plazasGatosDisponibles <= 0)
      throw new Error("No hay plazas para gatos.");
    this._gatos.push({ animal: g, ingreso: new Date(), salida: undefined });
  }

  /** Adopción de un perro */
  public adoptarPerro(microchip: string): void {
    const idx = this._perros
      .filter((p) => p.salida === undefined)
      .findIndex((p) => p.animal.microchip === microchip);
    if (idx === -1) throw new Error("Perro no encontrado.");
    const perro = this._perros
      .filter((p) => p.salida === undefined)
      .find((p) => p.animal.microchip === microchip);
    perro.salida = new Date();
  }

  /** Adopcion de un gato a partir de su microchip
   *  como identificador único.
   *  Al ser adoptado se establece la fecha de salida
   *  @param microchip - Identificador del animal (Perro/Gato).
   */
  public adoptarGato(microchip: string): void {
    const idx = this._gatos
      .filter((p) => p.salida === undefined)
      .findIndex((g) => g.animal.microchip === microchip);
    if (idx === -1) throw new Error("Gato no encontrado.");
    const gato = this._gatos
      .filter((p) => p.salida === undefined)
      .find((p) => p.animal.microchip === microchip);
    gato.salida = new Date();
  }

  /** Buscar animal por a partir de su microchip
   *  como identificador único.
   *  @param microchip - Identificador del animal (Perro/Gato).
   *  @returns Objeto de la clase Perro o Gato
   */
  public buscar(microchip: string): Perro | Gato | undefined {
    const perro = this._perros.find(
      (p) => p.animal.microchip === microchip,
    )?.animal;
    if (perro) return perro;
    return this._gatos.find((g) => g.animal.microchip === microchip)?.animal;
  }
}
