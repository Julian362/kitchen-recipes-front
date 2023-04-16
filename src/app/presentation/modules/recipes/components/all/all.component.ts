import { Component, OnInit } from '@angular/core';
import { Delegate } from '@application/delegate';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { AddPlannerService } from '@presentation/modules/meal-planner/services/add-planner.service';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'recipe-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class RecipeAllComponent implements OnInit {
  recipes!: RecipesModel[];
  constructor(
    private readonly delegate: Delegate,
    private addPlannerService: AddPlannerService,
    private readonly swal: SwalService
  ) {}

  addMealPlanner(recipe: RecipesModel) {
    const mealPlanner: MealPlannerModel = {
      name: recipe.name,
      amount: recipe.ingredients.map((ingredient) => ({
        ingredientId: ingredient.ingredientId,
        amount: ingredient.amount,
      })),
      notes: recipe.notes ?? '',
    };
    this.addPlannerService.addPlanner(mealPlanner);
  }

  ngOnInit(): void {
    this.delegate.toGetRecipesByUser();
    this.delegate.execute(localStorage.getItem('id')).subscribe({
      next: (res) => {
        this.recipes = res as RecipesModel[];
        this.delegate.toGetIngredient();
      },
      error: (err) => {
        this.swal.toFire('Error', err.message, 'error');
      },
    });
  }
}
