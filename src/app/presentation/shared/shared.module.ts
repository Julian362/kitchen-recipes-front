import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientOneComponent } from './components/ingredient-one/ingredient-one.component';
import { PlannerComponent } from './components/planner/planner.component';
import { IngredientPipe } from './pipes/ingredient.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [IngredientOneComponent, PlannerComponent, IngredientPipe, NavbarComponent],
  imports: [CommonModule],
  exports: [IngredientOneComponent, PlannerComponent, IngredientPipe],
})
export class SharedModule {}
