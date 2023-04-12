import { ICreateMealPlannerCommand } from '@domain/command';

export class CreateMealPlannerCommand implements ICreateMealPlannerCommand {
  amount!: AmountCommand[];

  notes!: string;

  name!: string;
}

class AmountCommand {
  amount!: number;
  ingredientId!: string;
}
