import { IIngredientDomainModel } from './interfaces/ingredient.domain-model.interface';

export class IngredientDomainModel implements IIngredientDomainModel {
  _id?: string;
  name!: string;
  description!: string;
  photoUrl!: string;
}
