import { IngredientDomainModel } from './ingredient.domain-model';
import { IRecipeDomainModel } from './interfaces/recipes.domain-model.interface';
import { UserDomainModel } from './user.domain-model';

export class RecipeDomainModel implements IRecipeDomainModel {
  _id?: string;
  name!: string;
  description!: string;
  ingredients!: {
    amount: number;
    ingredientId: IngredientDomainModel['_id'];
  }[];
  photoUrl!: string;
  steps!: string[];
  notes?: string;
  servings!: number;
  nutritionInfo?: string;
  userId?: UserDomainModel['_id'];
}
