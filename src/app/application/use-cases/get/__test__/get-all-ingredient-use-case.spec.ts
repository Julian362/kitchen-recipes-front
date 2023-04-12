import { ingredientServiceMock } from '@application/use-cases/__mocks__/user-case.mock';
import { IngredientDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { GetAllIngredientUseCase } from '../get-all-ingredient.use-case';

describe('GetAllIngredientUseCase', () => {
  let useCase: GetAllIngredientUseCase;
  let observable: Observable<IngredientDomainModel[]>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetAllIngredientUseCase(ingredientServiceMock);
      // Act
      observable = useCase.execute();
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
      expect(ingredientServiceMock.findAll).toBeCalled();
    });
  });
});
