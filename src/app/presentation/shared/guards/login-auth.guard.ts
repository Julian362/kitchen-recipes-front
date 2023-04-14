import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      tap((authState) => {
        if (!authState) {
          this.router.navigate(['/login']);
        }
      }),
      map((authState) => !!authState)
    );
  }
}
