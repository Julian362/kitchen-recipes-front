import { CreateIngredientUseCase } from '@application/use-cases';
import {
  IngredientCommandMock,
  ingredientServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { IngredientDomainModel } from '@domain/models';
import { Observable } from 'rxjs';

describe('CreateIngredientUseCase', () => {
  let useCase: CreateIngredientUseCase;
  let observable: Observable<IngredientDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new CreateIngredientUseCase(ingredientServiceMock);
      // Act
      observable = useCase.execute(IngredientCommandMock);
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
      expect(ingredientServiceMock.create).toBeCalled();
    });
  });
});
