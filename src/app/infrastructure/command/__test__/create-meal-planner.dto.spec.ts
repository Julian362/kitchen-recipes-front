import { CreateMealPlannerCommand } from '../create-meal-planner.command';

describe('CreateMealPlannerCommand', () => {
  let createMealPlannerCommand: CreateMealPlannerCommand;

  beforeEach(() => {
    createMealPlannerCommand = new CreateMealPlannerCommand();
  });

  it('should be defined', () => {
    expect(createMealPlannerCommand).toBeDefined();
  });
});
