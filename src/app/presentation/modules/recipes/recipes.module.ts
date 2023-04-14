import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@presentation/shared/shared.module';
import { RecipeAllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualRecipeComponent } from './components/individual/individual.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeComponent,
    CreateComponent,
    RecipeAllComponent,
    IndividualRecipeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}
