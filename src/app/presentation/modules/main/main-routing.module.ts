import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthGuard } from '@presentation/shared/guards';
import { LandingComponent } from './components/landing/landing.component';
const routes: Routes = [
  {
    path: 'ingredient',
    canActivate: [GoogleAuthGuard],
    loadChildren: () => {
      return import('../ingredient/ingredient.module').then(
        (m) => m.IngredientModule
      );
    },
  },
  {
    path: 'recipe',
    canActivate: [GoogleAuthGuard],
    loadChildren: () => {
      return import('../recipes/recipes.module').then((m) => m.RecipesModule);
    },
  },
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
