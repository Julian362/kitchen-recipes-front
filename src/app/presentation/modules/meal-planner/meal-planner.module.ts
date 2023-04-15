import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './components/planner/planner.component';
import { MealPlannerComponent } from './pages/meal-planner/meal-planner.component';



@NgModule({
  declarations: [
    PlannerComponent,
    MealPlannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MealPlannerModule { }
