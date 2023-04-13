import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIngredientService } from '@domain/services/ingredient.service';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class IngredientService implements IIngredientService {
  constructor(private http: HttpClient) {}
  create(entity: IngredientModel): Observable<IngredientModel> {
    return this.http.post<IngredientModel>(
      `${environment.HOST}/ingredient`,
      entity
    );
  }
  findById(id: string): Observable<IngredientModel> {
    return this.http.get<IngredientModel>(
      `${environment.HOST}/ingredient/${id}`
    );
  }
  update(id: string, ingredient: IngredientModel): Observable<IngredientModel> {
    return this.http.put<IngredientModel>(
      `${environment.HOST}/ingredient/${id}`,
      ingredient
    );
  }
  findAll(): Observable<IngredientModel[]> {
    return this.http.get<IngredientModel[]>(`${environment.HOST}/ingredients`);
  }
  findByName(name: string): Observable<IngredientModel> {
    return this.http.get<IngredientModel>(
      `${environment.HOST}/ingredient/name/${name}`
    );
  }
}
