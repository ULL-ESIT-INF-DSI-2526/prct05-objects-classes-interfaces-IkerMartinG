import { IStep } from "./IStep";

/**
 * Represents a recipe.
 */
export interface IRecipe {
  readonly name: string;
  readonly year: number;
  readonly steps: IStep[];

  validate(): void;
  getStepCount(): number;
  getTimeRange(): { min: number; max: number };
}
