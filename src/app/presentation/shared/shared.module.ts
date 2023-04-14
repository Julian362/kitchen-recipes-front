import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientOneComponent } from './components/ingredient-one/ingredient-one.component';

@NgModule({
  declarations: [IngredientOneComponent],
  imports: [CommonModule],
  exports: [IngredientOneComponent],
})
export class SharedModule {}
