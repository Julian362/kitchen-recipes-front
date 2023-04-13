import { IUseCase } from '@application/interface';
import { IAuthService } from '@domain/services/auth.service';
import { Observable, tap } from 'rxjs';

export class LogOutUseCase implements IUseCase {
  constructor(private readonly authService: IAuthService) {}

  execute(_id: string): Observable<void> {
    return this.authService.singOut().pipe(
      tap(() => {
        console.log('logout');
        localStorage.clear();
        sessionStorage.clear();
      })
    );
  }
}
