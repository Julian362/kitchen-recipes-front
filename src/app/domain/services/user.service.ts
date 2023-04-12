import { Observable } from 'rxjs';
import { UserDomainModel } from '../models';

export interface IUserService<
  Entity extends UserDomainModel = UserDomainModel
> {
  create(entity: Entity): Observable<Entity>;

  findById(id: string): Observable<Entity>;

  delete(id: string): Observable<Entity>;
}
