import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Delegate } from '@application/delegate';
import { IngredientService } from './services/ingredient.service';
import { MealPlannerService } from './services/meal-planner.service';
import { RecipeService } from './services/recipe.service';
import { UserService } from './services/user.service';
import { AuthService } from './utils/services/auth.service';

@NgModule({
  providers: [
    {
      provide: Delegate,
      useClass: Delegate,
      deps: [
        'IRecipeService',
        'IIngredientService',
        'IMealPlannerService',
        'IUserService',
        'IAuthService',
      ],
    },
    {
      provide: 'IRecipeService',
      useClass: RecipeService,
    },
    {
      provide: 'IUserService',
      useClass: UserService,
    },
    {
      provide: 'IIngredientService',
      useClass: IngredientService,
    },
    {
      provide: 'IMealPlannerService',
      useClass: MealPlannerService,
    },
    {
      provide: 'IAuthService',
      useClass: AuthService,
    },
  ],
  declarations: [],
  imports: [CommonModule],
})
export class InfrastructureModule {}
