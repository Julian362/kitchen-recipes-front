import {
  IIngredientDomainModel,
  IMealPlannerDomainModel,
  IRecipeDomainModel,
  IUserDomainModel,
} from '../interfaces';

export const mockIngredientDomainModel: IIngredientDomainModel = {
  name: 'mockIngredientDomainModel.name',
  description: 'mockIngredientDomainModel.description',
  photoUrl: 'mockIngredientDomainModel.photoUrl',
};

export const mockRecipeDomainModel: IRecipeDomainModel = {
  name: 'mockRecipeDomainModel.name',
  description: 'mockRecipeDomainModel.description',
  ingredients: [
    {
      amount: 1,
      ingredientId: 'mockRecipeDomainModel.ingredients.ingredientId',
    },
  ],
  photoUrl: 'mockRecipeDomainModel.photoUrl',
  steps: ['mockRecipeDomainModel.steps'],
  notes: 'mockRecipeDomainModel.notes',
  servings: 1,
  nutritionInfo: 'mockRecipeDomainModel.nutritionInfo',
  userId: 'mockRecipeDomainModel.userId',
};

export const mockMealPlannerDomainModel: IMealPlannerDomainModel = {
  name: 'mockMealPlannerDomainModel.name',
  amount: [
    {
      amount: 1,
      ingredientId: 'mockMealPlannerDomainModel.amount.ingredientId',
    },
  ],
  notes: 'mockMealPlannerDomainModel.notes',
};

export const mockUserDomainModel: IUserDomainModel = {
  email: 'mockUserDomainModel.email',
  googleId: 'mockUserDomainModel.googleId',
  name: 'mockUserDomainModel.name',
  photoUrl: 'mockUserDomainModel.photoUrl',
  mealPlannerId: 'mockUserDomainModel.mealPlannerId',
};
