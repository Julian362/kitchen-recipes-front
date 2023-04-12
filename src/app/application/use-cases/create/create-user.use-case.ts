import { IUseCase } from '@application/interface/';
import { ICreateUserCommand } from '@domain/command';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { Observable } from 'rxjs';

export class CreateUserUseCase implements IUseCase {
  constructor(private readonly service: IUserService) {}

  execute(user: ICreateUserCommand): Observable<UserDomainModel> {
    return this.service.create(user);
  }
}
