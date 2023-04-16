import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientAllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualIngredientComponent } from './components/individual/individual.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: '',
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
