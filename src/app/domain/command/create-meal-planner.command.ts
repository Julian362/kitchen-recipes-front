export interface ICreateMealPlannerCommand {
  name: string;
  notes: string;
  amount: { ingredientId: string; amount: number }[];
}
