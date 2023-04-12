import { mockIngredientDomainModel } from '../__mocks__/domain-model.mock';
import { IngredientDomainModel } from '../ingredient.domain-model';

describe('IngredientDomainModel', () => {
  let ingredientDomainModel: IngredientDomainModel;

  beforeEach(() => {
    // Arrange & Act
    ingredientDomainModel = new IngredientDomainModel();
    ingredientDomainModel.name = mockIngredientDomainModel.name;
    ingredientDomainModel.description = mockIngredientDomainModel.description;
    ingredientDomainModel.photoUrl = mockIngredientDomainModel.photoUrl;
  });

  it('should be defined and is a instance of IngredientDomainModel', () => {
    // Assert
    expect(ingredientDomainModel).toBeDefined();
    expect(ingredientDomainModel).toBeInstanceOf(IngredientDomainModel);
  });

  it('should have the required properties', () => {
    // Assert
    expect(ingredientDomainModel.name).toBeDefined();
    expect(ingredientDomainModel.description).toBeDefined();
    expect(ingredientDomainModel.photoUrl).toBeDefined();
  });
});
