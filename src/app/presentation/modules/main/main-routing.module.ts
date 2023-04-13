import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingredient',
    loadChildren: () => {
      return import('../ingredient/ingredient.module').then(
        (m) => m.IngredientModule
      );
    },
  },
  {
    path: 'recipe',
    loadChildren: () => {
      return import('../recipes/recipes.module').then((m) => m.RecipesModule);
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
