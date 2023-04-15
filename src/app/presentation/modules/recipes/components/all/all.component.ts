import { Component, OnInit } from '@angular/core';
import { Delegate } from '@application/delegate';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { AddPlannerService } from '@presentation/modules/meal-planner/services/add-planner.service';

@Component({
  selector: 'recipe-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class RecipeAllComponent implements OnInit {
  recipes!: RecipesModel[];
  constructor(
    private readonly delegate: Delegate,
    private addPlannerService: AddPlannerService
  ) {}

  // Método para agregar la receta al Meal Planner
  addMealPlanner(recipe: RecipesModel) {
    // Crear un nuevo MealPlannerModel con los datos de la receta
    const mealPlanner: MealPlannerModel = {
      name: recipe.name,
      amount: recipe.ingredients.map((ingredient) => ({
        ingredientId: ingredient.ingredientId,
        amount: ingredient.amount,
      })),
      notes: recipe.notes ?? '',
    };
    // Llamar al servicio para agregar el MealPlannerModel
    this.addPlannerService.addPlanner(mealPlanner);
  }

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
