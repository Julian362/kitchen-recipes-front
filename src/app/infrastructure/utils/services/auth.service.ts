import { Injectable } from '@angular/core';
import { IUserDomainModel } from '@domain/models';
import { IAuthService } from '@domain/services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements IAuthService {
  GoogleAuth(): Observable<IUserDomainModel> {
    throw new Error('Method not implemented.');
  }
}
