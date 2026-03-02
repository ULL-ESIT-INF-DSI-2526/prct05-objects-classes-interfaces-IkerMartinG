/**
 * Represents a single step in a recipe.
 */
export interface IStep {
  readonly name: string;
  readonly duration: number; // seconds
  readonly tags: string[];
  readonly optional: boolean;
  readonly completed: number;

  validate(): void;
}
