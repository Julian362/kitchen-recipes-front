import {
  ICreateIngredientCommand,
  ICreateMealPlannerCommand,
  ICreateRecipeCommand,
  ICreateUserCommand,
  IUpdateIngredientCommand,
  IUpdateMealPlannerCommand,
  IUpdateRecipesCommand,
} from '@domain/command';
import {
  IngredientDomainModel,
  MealPlannerDomainModel,
  RecipeDomainModel,
  UserDomainModel,
} from '@domain/models';
import {
  IIngredientService,
  IMealPlannerService,
  IRecipeService,
  IUserService,
} from '@domain/services';
import { of, throwError } from 'rxjs';

export const ingredientMock: IngredientDomainModel = {
  name: 'name',
  description: 'description',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const IngredientCommandMock: ICreateIngredientCommand = {
  name: 'name',
  description: 'description',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const updateIngredientCommand: IUpdateIngredientCommand = {
  name: 'name',
  description: 'description',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const recipeMock: RecipeDomainModel = {
  description: 'description',
  ingredients: [
    { amount: 1, ingredientId: 'ingredientId' },
    {
      amount: 1,
      ingredientId: 'ingredientId',
    },
  ],
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
  servings: 1,
  steps: ['step'],
  notes: 'notes',
  nutritionInfo: 'nutritionInfo',
  userId: 'userId',
};

export const updateRecipeCommandMock: IUpdateRecipesCommand = {
  description: 'description',
  ingredients: [{ amount: 1, ingredientId: 'ingredientId' }],
  name: 'name',
  notes: 'notes',
  nutritionInfo: 'nutritionInfo',
  photoUrl: 'www.example.com/photoUrl.png',
  servings: 1,
  steps: ['step'],
};

export const recipeCommandMock: ICreateRecipeCommand = {
  description: 'description',
  ingredients: [
    { amount: 1, ingredientId: 'ingredientId' },
    { amount: 1, ingredientId: 'ingredientId' },
  ],
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
  servings: 1,
  steps: ['step'],
  notes: 'notes',
  nutritionInfo: 'nutritionInfo',
  userId: 'userId',
};

export const mealPlannerMock: MealPlannerDomainModel = {
  name: 'name',
  amount: [{ amount: 1, ingredientId: 'ingredientId' }],
  notes: 'notes',
};

export const mealPlannerCommand: ICreateMealPlannerCommand = {
  amount: [{ amount: 1, ingredientId: 'ingredientId' }],
  name: 'name',
  notes: 'notes',
};

export const updateMealPlannerMock: IUpdateMealPlannerCommand = {
  name: 'name',
  amount: [{ amount: 1, ingredientId: 'ingredientId' }],
  notes: 'notes',
};

export const userMock: UserDomainModel = {
  email: 'example@gmail.com',
  googleId: 'googleId',
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const userCommandMock: ICreateUserCommand = {
  email: 'example@gmail.com',
  googleId: 'googleId',
  name: 'name',
  photoUrl: 'www.example.com/photoUrl.png',
};

export const deleteIdMock = 'deleteIdMock';

export const getIdMock = 'getIdMock';

export const updateIdMock = 'updateIdMock';

export const recipeServiceMock: IRecipeService = {
  create: jest.fn().mockReturnValue(of(recipeMock)),
  delete: jest.fn().mockReturnValue(of(recipeMock)),
  findById: jest.fn().mockReturnValue(of(recipeMock)),
  update: jest.fn().mockReturnValue(of(recipeMock)),
  findAllByUserId: jest.fn().mockReturnValue(of([recipeMock])),
};
export const ingredientServiceMock: IIngredientService = {
  create: jest.fn().mockReturnValue(of(ingredientMock)),
  findAll: jest.fn().mockReturnValue(of([ingredientMock])),
  findById: jest.fn().mockReturnValue(of(ingredientMock)),
  findByName: jest.fn().mockReturnValue(of([ingredientMock])),
  update: jest.fn().mockReturnValue(of(ingredientMock)),
};
export const mealPlannerServiceMock: IMealPlannerService = {
  create: jest.fn().mockReturnValue(of(mealPlannerMock)),
  delete: jest.fn().mockReturnValue(of(mealPlannerMock)),
  findById: jest.fn().mockReturnValue(of(mealPlannerMock)),
  update: jest.fn().mockReturnValue(of(mealPlannerMock)),
};
export const userServiceMock: IUserService = {
  create: jest.fn().mockReturnValue(of(userMock)),
  delete: jest.fn().mockReturnValue(of(userMock)),
  findById: jest.fn().mockReturnValue(of(userMock)),
};

export const recipeServiceMockNull: IRecipeService = {
  create: jest.fn().mockReturnValue(of(null)),
  delete: jest.fn().mockReturnValue(of(null)),
  findById: jest.fn().mockReturnValue(of(null)),
  update: jest.fn().mockReturnValue(of(null)),
  findAllByUserId: jest.fn().mockReturnValue(of([null])),
};

export const ingredientServiceMockNull: IIngredientService = {
  create: jest.fn().mockReturnValue(of(null)),
  findAll: jest.fn().mockReturnValue(of([null])),
  findById: jest.fn().mockReturnValue(of(null)),
  findByName: jest.fn().mockReturnValue(of([null])),
  update: jest.fn().mockReturnValue(of(null)),
};

export const ingredientServiceMockError: IIngredientService = {
  create: jest.fn().mockReturnValue(of(null)),
  findAll: jest.fn().mockReturnValue(of([null])),
  findById: jest.fn().mockReturnValue(throwError(() => new Error())),
  findByName: jest.fn().mockReturnValue(of([null])),
  update: jest.fn().mockReturnValue(of(null)),
};

export const mealPlannerServiceMockNull: IMealPlannerService = {
  create: jest.fn().mockReturnValue(of(mealPlannerMock)),
  delete: jest.fn().mockReturnValue(of(mealPlannerMock)),
  findById: jest.fn().mockReturnValue(of(null)),
  update: jest.fn().mockReturnValue(of(mealPlannerMock)),
};
