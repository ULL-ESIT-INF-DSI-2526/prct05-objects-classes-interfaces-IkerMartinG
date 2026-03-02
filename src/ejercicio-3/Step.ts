import { IStep } from "./IStep";

/**
 * Represents a step in a recipe.
 */
export class Step implements IStep {
  constructor(
    public readonly name: string,
    public readonly duration: number,
    public readonly tags: string[],
    public readonly optional: boolean,
    public readonly completed: number
  ) {
    this.validate();
  }

  /** Defensive validation */
  validate(): void {
    if (!this.name.trim()) throw new Error("Step name cannot be empty.");
    if (this.duration <= 0) throw new Error("Step duration must be > 0.");
    if (!Array.isArray(this.tags)) throw new Error("Tags must be an array.");
    if (this.completed < 0) throw new Error("Completed count cannot be negative.");
  }
}
