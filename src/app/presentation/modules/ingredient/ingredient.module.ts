import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@presentation/shared/shared.module';
import { IngredientAllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualIngredientComponent } from './components/individual/individual.component';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

@NgModule({
  declarations: [
    CreateComponent,
    IngredientAllComponent,
    IngredientComponent,
    IndividualIngredientComponent,
  ],

  imports: [
    CommonModule,
    IngredientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [IndividualIngredientComponent],
})
export class IngredientModule {}
