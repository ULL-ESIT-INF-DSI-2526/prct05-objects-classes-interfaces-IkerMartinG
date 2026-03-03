import { IChef } from "./IChef";
import { IRecipe } from "./IRecipe";

/**
 * Represents a chef with a recipe book.
 */
export class Chef implements IChef {
  private readonly _name: string;
  private readonly _followers: number;
  private readonly _recipes: IRecipe[];
  constructor(name: string, followers: number, recipes: IRecipe[]) {
    this._name = name;
    this._followers = followers;
    this._recipes = recipes;
    this.validate();
  }

  get name() {
    return this._name;
  }

  get followers() {
    return this._followers;
  }

  get recipes() {
    return this._recipes;
  }

  validate(): void {
    if (!this.name.trim()) throw new Error("Chef name cannot be empty.");
    if (this.followers < 0) throw new Error("Followers cannot be negative.");
    if (!Array.isArray(this.recipes))
      throw new Error("Recipes must be an array.");
    this.recipes.forEach((r) => r.validate());
  }
}
