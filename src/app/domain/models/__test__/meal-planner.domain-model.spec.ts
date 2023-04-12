import { mockMealPlannerDomainModel } from '../__mocks__/domain-model.mock';
import { MealPlannerDomainModel } from '../meal-planner.domain-model';

describe('MealPlannerDomainModel', () => {
  let model: MealPlannerDomainModel;

  beforeEach(() => {
    // Arrange & Act
    model = new MealPlannerDomainModel();
    model.amount = mockMealPlannerDomainModel.amount;
    model.name = mockMealPlannerDomainModel.name;
    model.notes = mockMealPlannerDomainModel.notes;
  });

  it('should be defined and is a instance of MealPlannerDomainModel', () => {
    // Assert
    expect(model).toBeDefined();
    expect(model).toBeInstanceOf(MealPlannerDomainModel);
  });

  it('should have the required properties', () => {
    // Assert
    expect(model.amount).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.notes).toBeDefined();
  });
});
