import { IChef } from "./IChef";
import { IRecipe } from "./IRecipe";
import { IStep } from "./IStep";

/**
 * Manages chefs, recipes and steps.
 */
export class CookbookManager {
  private chefs: IChef[] = [];

  addChef(chef: IChef): void {
    chef.validate();
    this.chefs.push(chef);
  }

  /** Show all chefs */
  showChefs(): void {
    console.table(
      this.chefs.map(c => ({
        Name: c.name,
        Followers: c.followers,
        Recipes: c.recipes.length
      }))
    );
  }

  /** Search chefs by name */
  searchChefs(name: string): IChef[] {
    return this.chefs.filter(c =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  /** Search recipes by name */
  searchRecipes(name: string): IRecipe[] {
    return this.chefs.flatMap(c => c.recipes)
      .filter(r => r.name.toLowerCase().includes(name.toLowerCase()));
  }

  /** Search steps by tag */
  searchSteps(tag: string): IStep[] {
    return this.chefs.flatMap(c => c.recipes)
      .flatMap(r => r.steps)
      .filter(s => s.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())));
  }

  /** Show recipes in table */
  showRecipes(recipes: IRecipe[]): void {
    console.table(
      recipes.map(r => ({
        Name: r.name,
        Year: r.year,
        Steps: r.steps.length,
        TimeMin: r.getTimeRange().min,
        TimeMax: r.getTimeRange().max
      }))
    );
  }

  /** Show steps in table */
  showSteps(steps: IStep[]): void {
    console.table(
      steps.map(s => ({
        Name: s.name,
        Duration: s.duration,
        Optional: s.optional,
        Tags: s.tags.join(", "),
        Completed: s.completed
      }))
    );
  }
}
