/**
 * Interface base para un animal del refugio.
 */
export interface IAnimal {
  microchip: string;
  nombre: string;
  edad: number;
  peso: number;
  salud: string;
  obtenerFicha(): string;
}
