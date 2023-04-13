import { UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
export interface IAuthService<Entity extends UserCredential = UserCredential> {
  authCredentials(): Observable<Entity>;

  singOut(): Observable<void>;
}
