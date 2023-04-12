import { ingredientServiceMock } from '@application/use-cases/__mocks__/user-case.mock';
import { IngredientDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { GetIngredientByNameUseCase } from '../get-ingredient-name.use-case';

describe('GetIngredientByNameUseCase', () => {
  let useCase: GetIngredientByNameUseCase;
  let observable: Observable<IngredientDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetIngredientByNameUseCase(ingredientServiceMock);
      // Act
      observable = useCase.execute('name');
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
      expect(ingredientServiceMock.findByName).toBeCalled();
    });
  });
});
