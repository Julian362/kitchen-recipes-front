import { UpdateIngredientCommand } from '../update-ingredient.command';

describe('UpdateIngredientCommand', () => {
  let updateIngredientCommand: UpdateIngredientCommand;

  beforeEach(() => {
    updateIngredientCommand = new UpdateIngredientCommand();
  });

  it('should be defined', () => {
    expect(updateIngredientCommand).toBeDefined();
  });
});
