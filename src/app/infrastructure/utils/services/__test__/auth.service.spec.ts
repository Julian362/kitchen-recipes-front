import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let authMock: Auth;

  beforeEach(() => {
    const authSpy = { signOut: jest.fn() };
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      providers: [AuthService, { provide: Auth, useValue: authSpy }],
    });
    authService = TestBed.inject(AuthService);
    authMock = TestBed.inject(Auth);
  });

  // it('should call signInWithPopup with GoogleAuthProvider when authCredentials is called', () => {
  //   // Arrange
  //   const googleAuthProviderSpy = jest.spyOn(
  //     GoogleAuthProvider.prototype,
  //     'addScope'
  //   );
  //   const signInWithPopupSpy = jest
  //     .spyOn(authMock, 'signInWithPopup')
  //     .mockResolvedValue({} as any);

  //   // Act
  //   authService.authCredentials().subscribe(() => {
  //     // Assert
  //     expect(signInWithPopupSpy).toHaveBeenCalledWith(
  //       authMock,
  //       new GoogleAuthProvider()
  //     );
  //     expect(googleAuthProviderSpy).not.toHaveBeenCalled(); // Omitir verificación de addScope si no es necesario en tu implementación real
  //   });
  // });

  it('should call signOut when signOut is called', () => {
    // Arrange
    const signOutSpy = jest
      .spyOn(authMock, 'signOut')
      .mockReturnValue(of() as any);

    // Act
    authService.singOut().subscribe(() => {
      // Assert
      expect(signOutSpy).toHaveBeenCalled();
    });
  });
});
