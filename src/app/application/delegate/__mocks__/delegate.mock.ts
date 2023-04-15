import {
  IIngredientService,
  IMealPlannerService,
  IRecipeService,
  IUserService,
} from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';

export const recipeServiceMock: IRecipeService = {
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
  findAllByUserId: jest.fn(),
};
export const ingredientServiceMock: IIngredientService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findById: jest.fn(),
  findByName: jest.fn(),
  update: jest.fn(),
};

export const authServiceMock: IAuthService = {
  authCredentials: jest.fn(),
  singOut: jest.fn(),
};
export const mealPlannerServiceMock: IMealPlannerService = {
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
  update: jest.fn(),
};
export const userServiceMock: IUserService = {
  create: jest.fn(),
  delete: jest.fn(),
  findById: jest.fn(),
};
