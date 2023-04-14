import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualRecipeComponent } from './components/individual/individual.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: '',
        component: RecipeAllComponent,
      },
      {
        path: ':id',
        component: IndividualRecipeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
