import { RecipeDomainModel } from '@domain/models/recipes.domain-model';
import { Observable } from 'rxjs';

export interface IRecipeService<
  Entity extends RecipeDomainModel = RecipeDomainModel,
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  update(id: string, recipe: Entity): Observable<Entity>;

  delete(id: string): Observable<Entity>;

  findAllByUserId(id: string): Observable<Entity[]>;
}
