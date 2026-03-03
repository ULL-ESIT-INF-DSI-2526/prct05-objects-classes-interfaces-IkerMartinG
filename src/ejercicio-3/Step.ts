import { IStep } from "./IStep";

/**
 * Represents a step in a recipe.
 */
export class Step implements IStep {
  private readonly _name: string;
  private readonly _duration: number;
  private readonly _tags: string[];
  private readonly _optional: boolean;
  private readonly _completed: number;

  constructor(
    name: string,
    duration: number,
    tags: string[],
    optional: boolean,
    completed: number,
  ) {
    this._name = name;
    this._duration = duration;
    this._tags = tags;
    this._optional = optional;
    this._completed = completed;
    this.validate();
  }

  get name() {
    return this._name;
  }

  get duration() {
    return this._duration;
  }

  get tags() {
    return this._tags;
  }

  get optional() {
    return this._optional;
  }

  get completed() {
    return this._completed;
  }

  /** Defensive validation */
  validate(): void {
    if (!this.name.trim()) throw new Error("Step name cannot be empty.");
    if (this.duration <= 0) throw new Error("Step duration must be > 0.");
    if (!Array.isArray(this.tags)) throw new Error("Tags must be an array.");
    if (this.completed < 0)
      throw new Error("Completed count cannot be negative.");
  }
}
