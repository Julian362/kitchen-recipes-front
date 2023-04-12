import { IUseCase } from '@application/interface';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { Observable } from 'rxjs';

export class DeleteUserUseCase implements IUseCase {
  constructor(private readonly service: IUserService) {}

  execute(_id: string): Observable<UserDomainModel> {
    return this.service.delete(_id);
  }
}
