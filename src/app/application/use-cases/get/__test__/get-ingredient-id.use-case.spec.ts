import {
  getIdMock,
  ingredientServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { IngredientDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { GetIngredientUseCase } from '../get-ingredient-id.use-case';

describe('GetIngredientUseCase', () => {
  let useCase: GetIngredientUseCase;
  let observable: Observable<IngredientDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetIngredientUseCase(ingredientServiceMock);
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
      expect(ingredientServiceMock.findById).toBeCalled();
    });
  });
});
