import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  edit = false;
  editIndex: number;
  editItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingService.editingIngredient.subscribe(
      (index: number) => {
        this.edit = true;
        this.editIndex = index;
        this.editItem = this.shoppingService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // const newIngredient = new Ingredient(
    //   this.nameInputRef.nativeElement.value,
    //   this.amountInputRef.nativeElement.value
    // );
    const formValue = form.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount);
    if (this.edit) {
      this.shoppingService.updateIngredient(this.editIndex, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.edit = false;
    form.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.edit = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editIndex);
    this.onClear();
  }
}
