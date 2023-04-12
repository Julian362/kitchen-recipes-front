import { ICreateRecipeCommand } from '@domain/command';

export class CreateRecipeCommand implements ICreateRecipeCommand {
  name!: string;

  description!: string;

  ingredients!: Ingredients[];

  photoUrl!: string;

  steps!: string[];

  notes!: string;

  servings!: number;

  nutritionInfo?: string;

  userId!: string;
}

class Ingredients {
  amount!: number;
  ingredientId!: string;
}
