import { CreateIngredientCommand } from '../create-ingredient.command';
import { CreateMealPlannerCommand } from '../create-meal-planner.command';
import { CreateRecipeCommand } from '../create-recipe.command';
import { CreateUserCommand } from '../create-user.command';
import { UpdateIngredientCommand } from '../update-ingredient.command';
import { UpdateMealPlannerCommand } from '../update-meal-planner.command';
import { UpdateRecipeCommand } from '../update-recipe.command';

export const mockCreateIngredientCommand: CreateIngredientCommand = {
  name: 'mockName',
  description: 'mockDescription',
  photoUrl: 'https://mockPhotoUrl.com/image.png',
};

export const mockCreateMealPlannerCommand: CreateMealPlannerCommand = {
  amount: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  name: 'mockName',
  notes: 'mockNotes',
};

export const mockCreateRecipeCommand: CreateRecipeCommand = {
  name: 'mockName',
  description: 'mockDescription',
  ingredients: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  photoUrl: 'mockPhotoUrl',
  steps: ['mockStep'],
  notes: 'mockNotes',
  servings: 1,
  nutritionInfo: 'mockNutritionInfo',
  userId: 'mockUserId',
};

export const mockCreateUserCommand: CreateUserCommand = {
  email: 'example@mock.com',
  googleId: 'mockGoogleId',
  name: 'mockName',
  photoUrl: 'mockPhotoUrl',
};

export const mockUpdateIngredientCommand: UpdateIngredientCommand = {
  name: 'mockName',
  description: 'mockDescription',
  photoUrl: 'mockPhotoUrl',
};

export const mockUpdateMealPlannerCommand: UpdateMealPlannerCommand = {
  amount: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  name: 'mockName',
  notes: 'mockNotes',
};

export const mockUpdateRecipeCommand: UpdateRecipeCommand = {
  name: 'mockName',
  description: 'mockDescription',
  ingredients: [
    {
      amount: 1,
      ingredientId: 'mockIngredientId',
    },
  ],
  photoUrl: 'mockPhotoUrl',
  steps: ['mockStep'],
  notes: 'mockNotes',
  servings: 1,
  nutritionInfo: 'mockNutritionInfo',
};
