import { IRecipe } from "./IRecipe";
import { IStep } from "./IStep";

/**
 * Represents a recipe with multiple steps.
 */
export class Recipe implements IRecipe {
  constructor(
    public readonly name: string,
    public readonly year: number,
    public readonly steps: IStep[]
  ) {
    this.validate();
  }

  /** Defensive validation */
  validate(): void {
    if (!this.name.trim()) throw new Error("Recipe name cannot be empty.");
    if (this.year < 1900 || this.year > new Date().getFullYear()) {
      throw new Error("Invalid recipe year.");
    }
    if (!Array.isArray(this.steps) || this.steps.length === 0) {
      throw new Error("A recipe must contain at least one step.");
    }
    this.steps.forEach(s => s.validate());
  }

  /** Number of steps */
  getStepCount(): number {
    return this.steps.length;
  }

  /**
   * Returns min and max time depending on optional steps.
   */
  getTimeRange(): { min: number; max: number } {
    let min = 0;
    let max = 0;

    for (const step of this.steps) {
      if (!step.optional) min += step.duration;
      max += step.duration;
    }

    return { min, max };
  }
}
