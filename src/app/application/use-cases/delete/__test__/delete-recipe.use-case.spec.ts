import {
  deleteIdMock,
  recipeServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { RecipeDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { DeleteRecipeUseCase } from '../delete-recipe.use-case';

describe('DeleteRecipeUseCase', () => {
  let useCase: DeleteRecipeUseCase;
  let observable: Observable<RecipeDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new DeleteRecipeUseCase(recipeServiceMock);
      // Act
      observable = useCase.execute(deleteIdMock);
    });
    it('should be defined', () => {
      // Assert
      expect(useCase).toBeDefined();
    });
    it('should return an observable', () => {
      // Assert
      expect(observable).toBeInstanceOf(Observable);
    });
    it('should call the service', () => {
      // Assert
      expect(recipeServiceMock.delete).toBeCalled();
    });
  });
});
