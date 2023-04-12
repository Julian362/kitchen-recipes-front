import { Observable } from 'rxjs';
import { IngredientDomainModel } from '../models';

export interface IIngredientService<
  Entity extends IngredientDomainModel = IngredientDomainModel
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  update(id: string, ingredient: Entity): Observable<Entity>;

  findAll(): Observable<Entity[]>;

  findByName(name: string): Observable<Entity>;
}
