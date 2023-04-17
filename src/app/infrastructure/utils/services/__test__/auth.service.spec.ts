import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let authMock: Auth;

  beforeEach(() => {
    const authSpy = { signOut: jest.fn() };
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: Auth, useValue: authSpy }],
    });
    authService = TestBed.inject(AuthService);
    authMock = TestBed.inject(Auth);
  });

  it('should be created', (done) => {
    // Arrange
    const userCredential = {} as any;
    (authService as any).popup = jest
      .fn()
      .mockReturnValue(of(userCredential).toPromise());

    // Act
    authService.authCredentials().subscribe(() => {
      // Assert
      expect(authMock).toBeTruthy();
      done();
    });
  });

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
