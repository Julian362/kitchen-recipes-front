import { Injectable } from '@angular/core';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddPlannerService {
  private mealPlannerNow: BehaviorSubject<MealPlannerModel> =
    new BehaviorSubject<MealPlannerModel>({} as MealPlannerModel);

  addPlanner(mealPlanner: MealPlannerModel) {
    const mealPlannerActually = this.mealPlannerNow.getValue();

    if (mealPlannerActually && mealPlannerActually.amount) {
      mealPlanner.amount.forEach((newIngredient) => {
        const existingIngredientIndex = mealPlannerActually.amount.findIndex(
          (existingIngredient) =>
            existingIngredient.ingredientId === newIngredient.ingredientId
        );

        if (existingIngredientIndex !== -1) {
          mealPlannerActually.amount[existingIngredientIndex].amount +=
            newIngredient.amount;
        } else {
          mealPlannerActually.amount.push(newIngredient);
        }
      });

      this.mealPlannerNow.next(mealPlannerActually);
    } else {
      this.mealPlannerNow.next(mealPlanner);

      this.getMealPlannerActual().subscribe((mealPlanner) => {
        console.log(mealPlanner, 'funciona');
      });
    }
  }

  // Método para obtener el mealPlanner actual
  getMealPlannerActual() {
    return this.mealPlannerNow.asObservable();
  }
}
