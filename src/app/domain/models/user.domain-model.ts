import { IUserDomainModel } from './interfaces/user.domain-model.interface';
import { MealPlannerDomainModel } from './meal-planner.domain-model';

export class UserDomainModel implements IUserDomainModel {
  _id?: string;
  mealPlannerId?: MealPlannerDomainModel['_id'];
  name!: string;
  email!: string;
  photoUrl!: string;
  googleId!: string;
}
