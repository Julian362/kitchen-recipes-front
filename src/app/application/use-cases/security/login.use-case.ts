import { HttpErrorResponse } from '@angular/common/http';
import { IUseCase } from '@application/interface';
import { UserDomainModel } from '@domain/models';
import { IUserService } from '@domain/services';
import { IAuthService } from '@domain/services/auth.service';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';

export class LoginUseCase implements IUseCase {
  constructor(
    private readonly service: IUserService,
    private readonly authService: IAuthService
  ) {}

  execute(_id: string): Observable<{
    data: UserDomainModel;
    token: string;
  }> {
    return this.authService.authCredentials().pipe(
      switchMap((userCredential) => {
        return this.service.findById(userCredential.user.uid).pipe(
          catchError((error: HttpErrorResponse) => {
            const user = new UserDomainModel();
            user.googleId = userCredential.user.uid;
            user.email = userCredential.user.email || '';
            user.name = userCredential.user.displayName || '';
            user.photoUrl = userCredential.user.photoURL || '';
            return error.error.message === 'User not found'
              ? this.service.create(user).pipe(
                  map((user) => {
                    return user;
                  })
                )
              : throwError(() => error);
          }),
          map((user) => {
            localStorage.setItem('token', user.token);
            return {
              data: user.data,
              token: user.token,
            };
          })
        );
      })
    );
  }
}
