import { UserDomainModel } from '@domain/models';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginUseCase } from '../login.use-case';

describe('LoginUseCase', () => {
  let loginUseCase: LoginUseCase;
  let userServiceMock: any;
  let authServiceMock: any;

  beforeEach(() => {
    // Crear mocks para IUserService y IAuthService
    userServiceMock = {
      findById: jest.fn(),
      create: jest.fn(),
    };
    authServiceMock = {
      authCredentials: jest.fn(),
    };
    loginUseCase = new LoginUseCase(userServiceMock, authServiceMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve user data and token successfully', (done) => {
    // Arrange
    const userCredential = {
      user: {
        uid: '123',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: 'https://example.com/photo.jpg',
      },
    };
    const user = new UserDomainModel();
    user.googleId = userCredential.user.uid;
    user.email = userCredential.user.email || '';
    user.name = userCredential.user.displayName || '';
    user.photoUrl = userCredential.user.photoURL || '';
    const token = 'test-token';
    userServiceMock.findById.mockReturnValue(of(user));
    authServiceMock.authCredentials.mockReturnValue(of(userCredential));

    // Act
    const result$ = loginUseCase.execute('123');
    result$
      .pipe(
        // Assert (1st A: Arrange)
        switchMap((result) => {
          expect(result).toEqual({
            data: user,
            token: token,
          });
          // Assert (2nd A: Act)
          expect(authServiceMock.authCredentials).toHaveBeenCalled();
          expect(userServiceMock.findById).toHaveBeenCalledWith(
            userCredential.user.uid
          );
          return of(null);
        }),
        catchError((error) => {
          done.fail(error);
          return throwError(() => error);
        })
      )
      .subscribe(
        () => {
          // Assert (3rd A: Assert)
          expect(localStorage.getItem('token')).toBe(token);
          expect(localStorage.getItem('googleId')).toBe(user.googleId);
          expect(localStorage.getItem('id')).toBe(user._id);
          done();
        },
        (error) => {
          done();
        }
      );
  });
});
