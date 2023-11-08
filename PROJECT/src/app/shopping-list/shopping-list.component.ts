import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private shoppingSubscription: Subscription;

  constructor(
    private shoppingService: ShoppingService,
    // private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingSubscription =
      this.shoppingService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
    // this.loggingService.printLog('Shopping list component ngOnInit');
  }

  ngOnDestroy(): void {
    this.shoppingSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.editingIngredient.next(index);
  }
}
