import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { CreateComponent } from './components/create/create.component';
import { AllComponent } from './components/all/all.component';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [
    IngredientComponent,
    CreateComponent,
    AllComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IngredientModule { }
