import { IRecipe } from "./IRecipe";

/**
 * Represents a chef.
 */
export interface IChef {
  readonly name: string;
  readonly followers: number;
  readonly recipes: IRecipe[];

  validate(): void;
}
