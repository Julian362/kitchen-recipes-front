import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { NoGoogleAuthGuard } from '../no-login-auth.guard';

describe('NoGoogleAuthGuard', () => {
  let guard: NoGoogleAuthGuard;
  let afAuthMock: any;
  let routerMock: any;

  beforeEach(() => {
    afAuthMock = {
      authState: of(null),
    };
    routerMock = {
      navigate: jest.fn(),
    };
    TestBed.configureTestingModule({
      providers: [
        NoGoogleAuthGuard,
        { provide: AngularFireAuth, useValue: afAuthMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    guard = TestBed.inject(NoGoogleAuthGuard);
  });

  describe('canActivate', () => {
    it('should return true if user is not authenticated', (done) => {
      // Arrange
      afAuthMock.authState = of(null);

      // Act
      guard.canActivate().subscribe((result) => {
        // Assert
        expect(result).toBe(true);
        expect(routerMock.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should return false and navigate to /recipe if user is authenticated', (done) => {
      // Arrange
      const userMock = { uid: '123' };
      afAuthMock.authState = of(userMock);

      // Act
      guard.canActivate().subscribe((result) => {
        // Assert
        expect(result).toBe(false);
        expect(routerMock.navigate).toHaveBeenCalledWith(['/recipe']);
        done();
      });
    });
  });
});
