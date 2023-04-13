import { Observable } from 'rxjs';
import { UserDomainModel } from '../models';

export interface IUserService<
  Entity extends UserDomainModel = UserDomainModel
> {
  create(entity: Entity): Observable<{
    data: Entity;
    token: string;
  }>;

  findById(id: string): Observable<{
    data: Entity;
    token: string;
  }>;

  delete(id: string): Observable<Entity>;
}
