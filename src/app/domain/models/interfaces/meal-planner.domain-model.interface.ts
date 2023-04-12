import { IIngredientDomainModel } from './ingredient.domain-model.interface';

export interface IMealPlannerDomainModel {
  _id?: string;
  name: string;
  amount: { ingredientId: IIngredientDomainModel['_id']; amount: number }[];
  notes: string;
}
