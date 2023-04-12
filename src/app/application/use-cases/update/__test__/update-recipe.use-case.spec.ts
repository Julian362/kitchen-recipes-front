import {
  getIdMock,
  recipeCommandMock,
  recipeServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UpdateRecipeUseCase } from '../update-recipe.use-case';

describe('UpdateRecipeUseCase', () => {
  let updateRecipeUseCase: UpdateRecipeUseCase;

  beforeEach(() => {
    //Arrange
    updateRecipeUseCase = new UpdateRecipeUseCase(recipeServiceMock);
  });

  it('should be defined', () => {
    expect(updateRecipeUseCase).toBeDefined();
  });

  it('should update a recipe', (done) => {
    //Act
    updateRecipeUseCase
      .execute(getIdMock, recipeCommandMock)
      .subscribe((recipe) => {
        //Assert
        expect(recipe).toBeDefined();
        done();
      });
  });

  it('should update a recipe', (done) => {
    //Act
    updateRecipeUseCase.execute(getIdMock, {} as any).subscribe((recipe) => {
      //Assert
      expect(recipe).toBeDefined();
      done();
    });
  });
});
