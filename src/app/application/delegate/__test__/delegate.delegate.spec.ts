import {
  CreateIngredientUseCase,
  CreateMealPlannerUseCase,
  CreateRecipeUseCase,
  CreateUserUseCase,
  DeleteMealPlannerUseCase,
  DeleteRecipeUseCase,
  DeleteUserUseCase,
  GetAllIngredientUseCase,
  GetIngredientByNameUseCase,
  GetIngredientUseCase,
  GetMealPlannerUseCase,
  GetRecipeUseCase,
  LoginUseCase,
  UpdateIngredientUseCase,
  UpdateMealPlannerUseCase,
  UpdateRecipeUseCase,
} from '@application/use-cases';

import { GetAllRecipesUseCase } from '@application/use-cases/get/get-all-recipes.use-case';
import { Delegate } from '..';
import {
  authServiceMock,
  ingredientServiceMock,
  mealPlannerServiceMock,
  recipeServiceMock,
  userServiceMock,
} from '../__mocks__/delegate.mock';

describe('Delegate', () => {
  let delegate: Delegate;

  beforeEach(() => {
    //Arrange
    delegate = new Delegate(
      recipeServiceMock,
      ingredientServiceMock,
      mealPlannerServiceMock,
      userServiceMock,
      authServiceMock
    );
  });

  describe('Create', () => {
    it('should instance of CreateIngredientUseCase ', () => {
      //Act
      delegate.toCreateIngredient();
      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(CreateIngredientUseCase);
    });
    it('should call CreateMealPlannerUseCase ', () => {
      //Act
      delegate.toCreateMealPlanner();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(CreateMealPlannerUseCase);
    });
    it('should call CreateRecipeUseCase ', () => {
      //Act

      delegate.toCreateRecipe();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(CreateRecipeUseCase);
    });
    it('should call CreateUserUseCase ', () => {
      //Act
      delegate.toCreateUser();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(CreateUserUseCase);
    });
  });

  describe('Delete', () => {
    it('should call DeleteMealPlannerUseCase ', () => {
      //Act
      delegate.toDeleteMealPlanner();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(DeleteMealPlannerUseCase);
    });
    it('should call DeleteRecipeUseCase ', () => {
      //Act
      delegate.toDeleteRecipe();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(DeleteRecipeUseCase);
    });
    it('should call DeleteUserUseCase ', () => {
      //Act
      delegate.toDeleteUser();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(DeleteUserUseCase);
    });
  });

  describe('Update', () => {
    it('should call UpdateMealPlannerUseCase ', () => {
      //Act
      delegate.toUpdateMealPlanner();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(UpdateMealPlannerUseCase);
    });
    it('should call UpdateRecipeUseCase ', () => {
      //Act
      delegate.toUpdateRecipe();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(UpdateRecipeUseCase);
    });
    it('should call UpdateIngredientUseCase ', () => {
      //Act
      delegate.toUpdateIngredient();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(UpdateIngredientUseCase);
    });
  });

  describe('Get', () => {
    it('should call GetMealPlannerUseCase ', () => {
      //Act
      delegate.toGetMealPlanner();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetMealPlannerUseCase);
    });
    it('should call GetAllIngredientsUseCase ', () => {
      //Act
      delegate.toGetAllIngredients();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetAllIngredientUseCase);
    });
    it('should call GetRecipeUseCase ', () => {
      //Act
      delegate.toGetRecipe();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetRecipeUseCase);
    });
    it('should call GetIngredientByNameUseCase ', () => {
      //Act
      delegate.toGetIngredientByNames();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetIngredientByNameUseCase);
    });
    it('should call GetIngredientUseCase ', () => {
      //Act
      delegate.toGetIngredient();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetIngredientUseCase);
    });
    it('should call GetUserUseCase ', () => {
      //Act
      delegate.toLogin();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(LoginUseCase);
    });
    it('should call GetIngredientUseCase ', () => {
      //Act
      delegate.toGetIngredient();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetIngredientUseCase);
    });
    it('GetRecipesByUser', () => {
      //Act
      delegate.toGetRecipesByUser();

      //Assert
      expect(delegate).toBeDefined();
      expect(delegate['delegate']).toBeInstanceOf(GetAllRecipesUseCase);
    });
  });

  describe('Execute', () => {
    it('should call execute from delegate', () => {
      //Arrange
      const spy = jest.spyOn(delegate, 'execute');
      //Act
      delegate.toGetAllIngredients();
      delegate.execute();
      //Assert
      expect(spy).toHaveBeenCalled();
    });
  });
});
