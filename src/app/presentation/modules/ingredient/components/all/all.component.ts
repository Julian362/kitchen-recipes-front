import { Component, OnInit } from '@angular/core';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';

@Component({
  selector: 'ingredient-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class IngredientAllComponent implements OnInit {
  ingredients!: IngredientModel[];
  constructor(private readonly delegate: Delegate) {}

  ngOnInit() {
    this.delegate.toGetAllIngredients();
    this.delegate.execute().subscribe({
      next: (res) => {
        this.ingredients = res as IngredientModel[];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
