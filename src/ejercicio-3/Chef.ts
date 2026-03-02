import { IChef } from "./IChef";
import { IRecipe } from "./IRecipe";

/**
 * Represents a chef with a recipe book.
 */
export class Chef implements IChef {
  constructor(
    public readonly name: string,
    public readonly followers: number,
    public readonly recipes: IRecipe[]
  ) {
    this.validate();
  }

  validate(): void {
    if (!this.name.trim()) throw new Error("Chef name cannot be empty.");
    if (this.followers < 0) throw new Error("Followers cannot be negative.");
    if (!Array.isArray(this.recipes)) throw new Error("Recipes must be an array.");
    this.recipes.forEach(r => r.validate());
  }
}
