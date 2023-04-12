import { IIngredientDomainModel } from './ingredient.domain-model.interface';
import { IUserDomainModel } from './user.domain-model.interface';

export interface IRecipeDomainModel {
  _id?: string;
  name: string;
  description: string;
  ingredients: {
    amount: number;
    ingredientId: IIngredientDomainModel['_id'];
  }[];
  photoUrl: string;
  steps: string[];
  notes?: string;
  servings: number;
  nutritionInfo?: string;
  userId: IUserDomainModel['_id'];
}
