import { IRecipe } from "./IRecipe";
import { IStep } from "./IStep";

/**
 * Represents a recipe with multiple steps.
 */
export class Recipe implements IRecipe {
  private readonly _name: string;
  private readonly _year: number;
  private readonly _steps: IStep[];
  constructor(name: string, year: number, steps: IStep[]) {
    this._name = name;
    this._year = year;
    this._steps = steps;
    this.validate();
  }

  get name() {
    return this._name;
  }

  get year() {
    return this._year;
  }

  get steps() {
    return this._steps;
  }

  /** Defensive validation */
  validate(): void {
    if (!this._name.trim()) throw new Error("Recipe name cannot be empty.");
    if (this._year < 1900 || this._year > new Date().getFullYear()) {
      throw new Error("Invalid recipe year.");
    }
    if (!Array.isArray(this._steps) || this._steps.length === 0) {
      throw new Error("A recipe must contain at least one step.");
    }
    this._steps.forEach((s) => s.validate());
  }

  /** Number of steps */
  getStepCount(): number {
    return this._steps.length;
  }

  /**
   * Returns min and max time depending on optional steps.
   */
  getTimeRange(): { min: number; max: number } {
    let min = 0;
    let max = 0;

    for (const step of this._steps) {
      if (!step.optional) min += step.duration;
      max += step.duration;
    }

    return { min, max };
  }
}
