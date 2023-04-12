import { mockRecipeDomainModel } from '../__mocks__/domain-model.mock';
import { RecipeDomainModel } from '../recipes.domain-model';

describe('RecipeDomainModel', () => {
  let model: RecipeDomainModel;

  beforeEach(() => {
    // Arrange & Act
    model = new RecipeDomainModel();
    model.description = mockRecipeDomainModel.description;
    model.ingredients = mockRecipeDomainModel.ingredients;
    model.name = mockRecipeDomainModel.name;
    model.photoUrl = mockRecipeDomainModel.photoUrl;
    model.steps = mockRecipeDomainModel.steps;
    model.notes = mockRecipeDomainModel.notes;
    model.servings = mockRecipeDomainModel.servings;
    model.nutritionInfo = mockRecipeDomainModel.nutritionInfo;
  });

  it('should be defines and is instance of RecipeDomainModel', () => {
    // Assert
    expect(model).toBeDefined();
    expect(model).toBeInstanceOf(RecipeDomainModel);
  });

  it('should have the required properties', () => {
    // Assert
    expect(model.description).toBeDefined();
    expect(model.ingredients).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.photoUrl).toBeDefined();
    expect(model.steps).toBeDefined();
    expect(model.notes).toBeDefined();
    expect(model.servings).toBeDefined();
    expect(model.nutritionInfo).toBeDefined();
  });
});
