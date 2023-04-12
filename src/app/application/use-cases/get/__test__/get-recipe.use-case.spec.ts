import {
  getIdMock,
  recipeServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { RecipeDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { GetRecipeUseCase } from '../get-recipe.use-case';

describe('GetRecipeUseCase', () => {
  let useCase: GetRecipeUseCase;
  let observable: Observable<RecipeDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetRecipeUseCase(recipeServiceMock);
      // Act
      observable = useCase.execute(getIdMock);
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
      expect(recipeServiceMock.findById).toBeCalled();
    });
  });
});
