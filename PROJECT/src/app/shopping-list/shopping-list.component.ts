import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 2),
    new Ingredient('Flour', 1),
  ];

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
