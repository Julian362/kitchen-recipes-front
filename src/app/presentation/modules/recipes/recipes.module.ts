import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualComponent } from './components/individual/individual.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeComponent,
    CreateComponent,
    AllComponent,
    IndividualComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}
