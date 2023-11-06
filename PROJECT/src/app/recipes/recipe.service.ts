import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // sampleRecipe: Recipe = new Recipe(
  //   'Pancakes',
  //   'A recipe for pancakes',
  //   'https://imgs.search.brave.com/dRXYxSmL8xVZMSS_kZhbRqfnI3-drCLwrUuOM7EpQik/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDQ2ODk4MS9waG90/by93b21hbi1jb29r/aW5nLWhvbWVtYWRl/LXBhbmNha2VzLWZv/ci1icmVha2Zhc3Qu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVA2YVNGM0U0VWdt/ZzFCMDFoNVg4eDJp/aXphRGpWcWdLMmxf/NnE1eWlMakk9',
  //   [
  //     new Ingredient('Egg', 2),
  //     new Ingredient('Flour', 1),
  //     new Ingredient('Milk', 1),
  //   ]
  // );
  // sampleRecipe2: Recipe = new Recipe(
  //   'Scrambled Eggs',
  //   'A recipe for scrambled eggs',
  //   'https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-500x375.jpg',
  //   [
  //     new Ingredient('Egg', 3),
  //     new Ingredient('Salt', 1),
  //     new Ingredient('PEpper', 1),
  //   ]
  // );
  // private recipes: Recipe[] = [this.sampleRecipe, this.sampleRecipe2];
  private recipes: Recipe[] = [];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    // calling slice returns the array by value instead of by reference
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
