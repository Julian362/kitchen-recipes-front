import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMealPlannerService } from '@domain/services/meal-planner.service';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { environment } from '@infrastructure/utils/env/host';
import { Observable } from 'rxjs';
@Injectable()
export class MealPlannerService implements IMealPlannerService {
  constructor(private http: HttpClient) {}

  create(entity: MealPlannerModel): Observable<MealPlannerModel> {
    return this.http.post<MealPlannerModel>(
      `${environment.HOST}/meal-planner`,
      entity
    );
  }
  findById(id: string): Observable<MealPlannerModel> {
    return this.http.get<MealPlannerModel>(
      `${environment.HOST}/meal-planner/${id}`
    );
  }
  update(
    id: string,
    mealPlanner: MealPlannerModel
  ): Observable<MealPlannerModel> {
    return this.http.put<MealPlannerModel>(
      `${environment.HOST}/meal-planner/${id}`,
      mealPlanner
    );
  }
  delete(id: string): Observable<MealPlannerModel> {
    return this.http.delete<MealPlannerModel>(
      `${environment.HOST}/meal-planner/${id}`
    );
  }
}
