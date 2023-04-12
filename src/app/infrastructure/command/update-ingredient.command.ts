import { IUpdateIngredientCommand } from '@domain/command';

export class UpdateIngredientCommand implements IUpdateIngredientCommand {
  name?: string;
  description?: string;
  photoUrl?: string;
}
