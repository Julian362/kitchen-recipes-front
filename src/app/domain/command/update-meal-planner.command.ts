export interface IUpdateMealPlannerCommand {
  name?: string;
  amount?: { amount: number; ingredientId: string }[];
  notes?: string;
}
