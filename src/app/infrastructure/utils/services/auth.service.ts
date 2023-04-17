import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { IAuthService } from '@domain/services/auth.service';
import { from, Observable } from 'rxjs';
@Injectable()
export class AuthService implements IAuthService {
  private popup = signInWithPopup;
  constructor(private readonly auth: Auth) {}
  authCredentials(): Observable<UserCredential> {
    return from(this.popup(this.auth, new GoogleAuthProvider()));
  }

  singOut(): Observable<void> {
    return from(this.auth.signOut());
  }
}
