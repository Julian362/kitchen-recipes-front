export interface ICreateRecipeCommand {
  name: string;
  description: string;
  ingredients: { amount: number; ingredientId: string }[];
  photoUrl: string;
  steps: string[];
  notes: string;
  servings: number;
  nutritionInfo?: string;
  userId: string;
}
