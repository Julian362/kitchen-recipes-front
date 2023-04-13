import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { IndividualComponent } from './components/individual/individual.component';
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
        component: AllComponent,
      },
      {
        path: ':id',
        component: IndividualComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientRoutingModule {}
