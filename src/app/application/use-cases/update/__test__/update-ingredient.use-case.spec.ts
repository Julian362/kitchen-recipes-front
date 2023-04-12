import {
  getIdMock,
  ingredientServiceMock,
  updateIngredientCommand,
} from '@application/use-cases/__mocks__/user-case.mock';
import { IngredientDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { UpdateIngredientUseCase } from '../update-ingredient.use-case';

describe('UpdateIngredientUseCase', () => {
  let useCase: UpdateIngredientUseCase;
  let observable: Observable<IngredientDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new UpdateIngredientUseCase(ingredientServiceMock);
      // Act
      observable = useCase.execute(getIdMock, updateIngredientCommand);
    });
    it('should be defined', () => {
      // Assert
      expect(useCase).toBeDefined();
    });
    it('should return an observable', () => {
      // Assert
      expect(observable).toBeInstanceOf(Observable);
    });
    it('should return an observable with any', () => {
      // Arrange
      const useCaseWrong = new UpdateIngredientUseCase(ingredientServiceMock);
      // Act
      observable = useCaseWrong.execute(getIdMock, {} as any);
      // Assert
      expect(observable).toBeInstanceOf(Observable);
      observable.subscribe((ingredient) => {
        expect(ingredient).toBeDefined();
        expect(ingredientServiceMock.update).toHaveBeenCalled();
      });
    });
  });
});
