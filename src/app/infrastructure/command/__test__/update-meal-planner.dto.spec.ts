import { UpdateMealPlannerCommand } from '../update-meal-planner.command';

describe('UpdateMealPlannerCommand', () => {
  let updateMealPlannerCommand: UpdateMealPlannerCommand;

  beforeEach(() => {
    updateMealPlannerCommand = new UpdateMealPlannerCommand();
  });

  it('should be defined', () => {
    expect(updateMealPlannerCommand).toBeDefined();
  });
});
