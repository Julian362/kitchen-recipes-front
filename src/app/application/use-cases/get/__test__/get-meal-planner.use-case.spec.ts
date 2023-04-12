import { GetMealPlannerUseCase } from '@application/use-cases';
import {
  getIdMock,
  mealPlannerServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { MealPlannerDomainModel } from '@domain/models';
import { Observable } from 'rxjs';

describe('GetMealPlannerUseCase', () => {
  let useCase: GetMealPlannerUseCase;
  let observable: Observable<MealPlannerDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetMealPlannerUseCase(mealPlannerServiceMock);
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
      expect(mealPlannerServiceMock.findById).toBeCalled();
    });
  });
});
