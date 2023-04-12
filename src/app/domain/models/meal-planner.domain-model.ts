import { IngredientDomainModel } from './ingredient.domain-model';
import { IMealPlannerDomainModel } from './interfaces/meal-planner.domain-model.interface';

export class MealPlannerDomainModel implements IMealPlannerDomainModel {
  _id?: string;
  name!: string;
  amount!: { ingredientId: IngredientDomainModel['_id']; amount: number }[];
  notes!: string;
}
