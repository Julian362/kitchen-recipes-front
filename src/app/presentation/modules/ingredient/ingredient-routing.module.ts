import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientAllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualIngredientComponent } from './components/individual/individual.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'all',
        component: IngredientAllComponent,
      },
      {
        path: ':id',
        component: IndividualIngredientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientRoutingModule {}
