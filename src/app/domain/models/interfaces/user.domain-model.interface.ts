import { IMealPlannerDomainModel } from './meal-planner.domain-model.interface';

export interface IUserDomainModel {
  _id?: string;
  mealPlannerId?: IMealPlannerDomainModel['_id'];
  name: string;
  email: string;
  photoUrl: string;
  googleId: string;
}
