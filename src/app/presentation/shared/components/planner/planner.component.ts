import { Component, OnInit } from '@angular/core';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { AddPlannerService } from '@presentation/modules/meal-planner/services/add-planner.service';

@Component({
  selector: 'planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {
  ingredientPlanner: {
    ingredient: string;
    amount: number;
  }[] = [];

  constructor(private addPlannerService: AddPlannerService) {}
  ngOnInit(): void {
    this.addPlannerService.getMealPlannerActual().subscribe((mealPlanner) => {
      if (mealPlanner) {
        this.ingredientPlanner = this.getIngredientMealPlanner(mealPlanner);
      }
    });
  }

  getIngredientMealPlanner(mealPlanner: MealPlannerModel): {
    ingredient: string;
    amount: number;
  }[] {
    return mealPlanner.amount.map((ingredient) => {
      return {
        ingredient: ingredient.ingredientId ?? '',
        amount: ingredient.amount,
      };
    });
  }
}
