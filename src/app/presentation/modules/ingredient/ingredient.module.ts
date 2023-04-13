import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualComponent } from './components/individual/individual.component';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

@NgModule({
  declarations: [
    CreateComponent,
    AllComponent,
    IngredientComponent,
    IndividualComponent,
  ],

  imports: [
    CommonModule,
    IngredientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IngredientRoutingModule,
  ],
})
export class IngredientModule {}
