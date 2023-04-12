import {
  recipeCommandMock,
  recipeServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { CreateRecipeUseCase } from '../create-recipe.use-case';

describe('CreateRecipeUseCase', () => {
  let createRecipeUseCase: CreateRecipeUseCase;

  beforeEach(() => {
    //Arrange
    createRecipeUseCase = new CreateRecipeUseCase(recipeServiceMock);
  });

  it('should be defined', () => {
    expect(createRecipeUseCase).toBeDefined();
  });

  it('should create a recipe', (done) => {
    //Act
    createRecipeUseCase.execute(recipeCommandMock).subscribe((recipe) => {
      //Assert
      expect(recipe).toEqual(recipeCommandMock);
      done();
    });
  });
});
