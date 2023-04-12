import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecipeService } from '@domain/services/recipes.service';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { environment } from '@infrastructure/utils/env/host';
import { Observable } from 'rxjs';
@Injectable()
export class RecipeService implements IRecipeService {
  constructor(private http: HttpClient) {}

  create(entity: RecipesModel): Observable<RecipesModel> {
    return this.http.post<RecipesModel>(`${environment.HOST}/recipe`, entity);
  }
  findById(id: string): Observable<RecipesModel> {
    return this.http.get<RecipesModel>(`${environment.HOST}/recipe/${id}`);
  }
  update(id: string, recipe: RecipesModel): Observable<RecipesModel> {
    return this.http.put<RecipesModel>(
      `${environment.HOST}/recipe/${id}`,
      recipe
    );
  }
  delete(id: string): Observable<RecipesModel> {
    return this.http.delete<RecipesModel>(`${environment.HOST}/recipe/${id}`);
  }

  findAllByUserId(id: string): Observable<RecipesModel[]> {
    return this.http.get<RecipesModel[]>(`${environment.HOST}/recipes/${id}`);
  }
}
