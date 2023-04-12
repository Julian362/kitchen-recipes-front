import { UpdateRecipeCommand } from '../update-recipe.command';

describe('UpdateRecipesCommand', () => {
  let updateRecipeCommand: UpdateRecipeCommand;

  beforeEach(() => {
    updateRecipeCommand = new UpdateRecipeCommand();
  });

  it('should be defined', () => {
    expect(updateRecipeCommand).toBeDefined();
  });
});
