import { CreateIngredientCommand } from '../create-ingredient.command';

describe('CreateIngredientCommand', () => {
  let Command: CreateIngredientCommand;
  beforeEach(() => {
    // Arrange & Act
    Command = new CreateIngredientCommand();
  });

  it('should be defined', () => {
    // Assert
    expect(Command).toBeDefined();
  });
});
