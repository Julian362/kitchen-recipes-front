import { IUpdateMealPlannerCommand } from '@domain/command';

export class UpdateMealPlannerCommand implements IUpdateMealPlannerCommand {
  name?: string;
  amount?: AmountCommand[];
  notes?: string;
}

class AmountCommand {
  amount!: number;
  ingredientId!: string;
}
