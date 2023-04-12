import { CreateRecipeCommand } from '../create-recipe.command';

describe('CreateRecipeCommand', () => {
  let createRecipeCommand: CreateRecipeCommand;

  beforeEach(() => {
    createRecipeCommand = new CreateRecipeCommand();
  });

  it('should be defined', () => {
    expect(createRecipeCommand).toBeDefined();
  });
});
