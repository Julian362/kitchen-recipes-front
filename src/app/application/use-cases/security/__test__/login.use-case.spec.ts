import { HttpErrorResponse } from '@angular/common/http';
import { UserDomainModel } from '@domain/models';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginUseCase } from '../login.use-case';

describe('LoginUseCase', () => {
  let loginUseCase: LoginUseCase;
  let userServiceMock: any;
  let authServiceMock: any;

  beforeEach(() => {
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
        switchMap((result) => {
          expect(result).toEqual({
            data: user,
            token: token,
          });
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

  it('should create user data and token successfully', (done) => {
    // Arrange
    jest.spyOn(userServiceMock, 'findById').mockReturnValue(
      throwError(
        () =>
          new HttpErrorResponse({
            error: {
              message: 'User not found',
            },
          })
      )
    );

    const userCredential = {
      user: {
        uid: '123',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: 'https://example.com/photo.jpg',
      },
    };
    jest
      .spyOn(authServiceMock, 'authCredentials')
      .mockReturnValue(of(userCredential));
    const user: UserDomainModel = {
      _id: '123',
      googleId: userCredential.user.uid,
      email: userCredential.user.email || '',
      name: userCredential.user.displayName || '',
      photoUrl: userCredential.user.photoURL || '',
    };
    const token = 'test-token';
    jest.spyOn(userServiceMock, 'create').mockReturnValue(
      of({
        data: user,
        token: token,
      })
    );

    // Act
    const result = loginUseCase.execute('123');

    result.subscribe({
      next: (result) => {
        expect(result).toEqual({
          data: user,
          token: token,
        });
        expect(authServiceMock.authCredentials).toHaveBeenCalled();
        expect(userServiceMock.findById).toHaveBeenCalledWith(user._id);
        expect(userServiceMock.create).toHaveBeenCalledWith({
          googleId: user.googleId,
          email: user.email,
          name: user.name,
          photoUrl: user.photoUrl,
        });
        expect(localStorage.getItem('token')).toBe(token);
        expect(localStorage.getItem('googleId')).toBe(user.googleId);
        expect(localStorage.getItem('id')).toBe(user._id);
        done();
      },
    });
  });

  it('should create user data and token successfully', (done) => {
    // Arrange
    jest.spyOn(userServiceMock, 'findById').mockReturnValue(
      throwError(
        () =>
          new HttpErrorResponse({
            error: {
              message: 'error',
            },
          })
      )
    );

    const userCredential = {
      user: {
        uid: '123',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: 'https://example.com/photo.jpg',
      },
    };
    jest
      .spyOn(authServiceMock, 'authCredentials')
      .mockReturnValue(of(userCredential));
    jest
      .spyOn(userServiceMock, 'create')
      .mockReturnValue(of(throwError(() => new Error('Error creating user'))));

    // Act
    const result = loginUseCase.execute('123');

    result.subscribe({
      error: (error) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
        done();
      },
    });
  });
});
