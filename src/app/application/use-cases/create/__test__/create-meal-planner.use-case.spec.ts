import {
  mealPlannerCommand,
  mealPlannerServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { CreateMealPlannerUseCase } from '../create-meal-planner.use-case';

describe('CreateMealPlannerUseCase', () => {
  let createMealPlannerUseCase: CreateMealPlannerUseCase;
  beforeEach(() => {
    //Arrange
    createMealPlannerUseCase = new CreateMealPlannerUseCase(
      mealPlannerServiceMock
    );
  });

  it('should be defined', () => {
    expect(createMealPlannerUseCase).toBeDefined();
  });

  it('should create a meal planner', (done) => {
    //Act
    createMealPlannerUseCase
      .execute('id', mealPlannerCommand)
      .subscribe((mealPlanner) => {
        //Assert
        expect(mealPlanner).toEqual(mealPlannerCommand);
        done();
      });
  });

  it('should call the service', () => {
    //Assert
    expect(mealPlannerServiceMock.create).toBeCalled();
  });
});
