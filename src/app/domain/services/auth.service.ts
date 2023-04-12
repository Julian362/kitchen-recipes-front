import { IUserDomainModel } from '@domain/models';
import { Observable } from 'rxjs';

export interface IAuthService {
  GoogleAuth(): Observable<IUserDomainModel>;
}
