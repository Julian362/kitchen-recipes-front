import { Component, OnInit } from '@angular/core';
import { Delegate } from '@application/delegate';
import { RecipesModel } from '@infrastructure/models/recipes.model';

@Component({
  selector: 'recipe-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class RecipeAllComponent implements OnInit {
  recipes!: RecipesModel[];
  constructor(private readonly delegate: Delegate) {}
  ngOnInit(): void {
    console.log('hola');
    this.delegate.toGetRecipesByUser();
    this.delegate.execute(localStorage.getItem('id')).subscribe({
      next: (res) => {
        this.recipes = res as RecipesModel[];
        this.delegate.toGetIngredient();
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
