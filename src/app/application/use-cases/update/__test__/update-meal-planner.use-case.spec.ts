import {
  getIdMock,
  mealPlannerCommand,
  mealPlannerServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UpdateMealPlannerUseCase } from '../update-meal-planner.use-case';

describe('UpdateMealPlannerUseCase', () => {
  let useCase: UpdateMealPlannerUseCase;

  beforeEach(() => {
    //Command
    useCase = new UpdateMealPlannerUseCase(mealPlannerServiceMock);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should update a meal planner', (done) => {
    //Act
    useCase.execute(getIdMock, mealPlannerCommand).subscribe((mealPlanner) => {
      //Assert
      expect(mealPlanner).toBeDefined();
      done();
    });
  });

  it('should update a meal planner', (done) => {
    //Act
    useCase.execute(getIdMock, {} as any).subscribe((mealPlanner) => {
      //Assert
      expect(mealPlanner).toBeDefined();
      done();
    });
  });
});
