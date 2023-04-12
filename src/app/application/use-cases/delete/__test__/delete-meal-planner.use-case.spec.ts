import {
  deleteIdMock,
  mealPlannerServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { MealPlannerDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { DeleteMealPlannerUseCase } from '../delete-meal-planner.use-case';

describe('DeleteMealPlannerUseCase', () => {
  let useCase: DeleteMealPlannerUseCase;
  let observable: Observable<MealPlannerDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new DeleteMealPlannerUseCase(mealPlannerServiceMock);
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
      expect(mealPlannerServiceMock.delete).toBeCalled();
    });
  });
});
