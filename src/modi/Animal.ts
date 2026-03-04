import { IAnimal } from "./IAnimal";
/**
 * Clase abstracta que representa un animal del refugio.
 * Contiene atributos comunes y validaciones defensivas.
 */
export abstract class Animal implements IAnimal {
  private _microchip: string;
  private _nombre: string;
  private _edad: number;
  private _peso: number;
  private _salud: string;

  /**
   * Crea un nuevo Animal.
   *
   * @param microchip - Identidificador unico del animal.
   * @param nombre - Nombre del animal.
   * @param edad - Edad de animal.
   * @param peso - Peso del animal.
   * @param salud - Estado de salid del animal.
   */
  constructor(
    microchip: string,
    nombre: string,
    edad: number,
    peso: number,
    salud: string,
  ) {
    this._microchip = microchip;
    this._nombre = nombre;
    this._edad = edad;
    this._peso = peso;
    this._salud = salud;
    this.validate();
  }
  /** Getter del microchip del animal */
  get microchip(): string {
    return this._microchip;
  }
  /** Setter del microchip del animal */
  set microchip(v: string) {
    if (!v.trim()) throw new Error("Microchip inválido.");
    this._microchip = v;
  }
  /** Getter del nombre del animal */
  get nombre(): string {
    return this._nombre;
  }
  /** Setter del nombre del animal */
  set nombre(v: string) {
    if (!v.trim()) throw new Error("Nombre inválido.");
    this._nombre = v;
  }
  /** Getter de la edad del animal*/
  get edad(): number {
    return this._edad;
  }
  /** Setter de la edad del animal*/
  set edad(v: number) {
    if (v < 0) throw new Error("Edad inválida.");
    this._edad = v;
  }
  /** Getter del peso del animal*/
  get peso(): number {
    return this._peso;
  }
  /** Setter del peso del animal*/
  set peso(v: number) {
    if (v <= 0) throw new Error("Peso inválido.");
    this._peso = v;
  }
  /** Getter del estado de salud del animmal */
  get salud(): string {
    return this._salud;
  }
  /** Setter del estado de salud del animal*/
  set salud(v: string) {
    if (!v.trim()) throw new Error("Estado de salud inválido.");
    this._salud = v;
  }

  /** Método abstracto que cada animal debe implementar */
  public abstract obtenerFicha(): string;

  /** Validación defensiva */
  private validate(): void {
    if (!this._microchip.trim()) throw new Error("Microchip vacío.");
    if (!this._nombre.trim()) throw new Error("Nombre vacío.");
    if (this._edad < 0) throw new Error("Edad inválida.");
    if (this._peso <= 0) throw new Error("Peso inválido.");
    if (!this._salud.trim()) throw new Error("Salud inválida.");
  }
}
