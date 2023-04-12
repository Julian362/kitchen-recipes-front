import { Observable } from 'rxjs';
import { MealPlannerDomainModel } from '../models';

export interface IMealPlannerService<
  Entity extends MealPlannerDomainModel = MealPlannerDomainModel
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  update(id: string, mealPlanner: Entity): Observable<Entity>;

  delete(id: string): Observable<Entity>;
}
