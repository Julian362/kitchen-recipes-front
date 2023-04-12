import { IUpdateRecipesCommand } from '@domain/command';

export class UpdateRecipeCommand implements IUpdateRecipesCommand {
  name?: string;
  ingredients?: IngredientCommand[];
  description?: string;
  photoUrl?: string;
  steps?: string[];
  notes?: string;
  servings?: number;
  nutritionInfo?: string;
}

class IngredientCommand {
  amount!: number;
  ingredientId!: string;
}
