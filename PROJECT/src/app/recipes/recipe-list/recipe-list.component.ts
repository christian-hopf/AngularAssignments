import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  sampleRecipe: Recipe = new Recipe(
    'Pancakes',
    'A recipe for pancakes',
    'https://imgs.search.brave.com/dRXYxSmL8xVZMSS_kZhbRqfnI3-drCLwrUuOM7EpQik/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDQ2ODk4MS9waG90/by93b21hbi1jb29r/aW5nLWhvbWVtYWRl/LXBhbmNha2VzLWZv/ci1icmVha2Zhc3Qu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVA2YVNGM0U0VWdt/ZzFCMDFoNVg4eDJp/aXphRGpWcWdLMmxf/NnE1eWlMakk9'
  );

  recipes: Recipe[] = [this.sampleRecipe, this.sampleRecipe];
}
