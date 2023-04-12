import { ICreateIngredientCommand } from '@domain/command';

export class CreateIngredientCommand implements ICreateIngredientCommand {
  name!: string;

  description!: string;

  photoUrl!: string;
}
