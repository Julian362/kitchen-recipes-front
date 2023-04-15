import { IAuthService } from '@domain/services/auth.service';
import { of } from 'rxjs';
import { LogOutUseCase } from '../logout.use-case';

describe('LogOutUseCase', () => {
  let authService: IAuthService;
  let logOutUseCase: LogOutUseCase;

  beforeEach(() => {
    authService = {
      singOut: jest.fn(),
    } as any;
    logOutUseCase = new LogOutUseCase(authService);
  });

  it('should call authService.singOut() and clear localStorage and sessionStorage', () => {
    // Arrange
    jest.spyOn(localStorage, 'clear');
    jest.spyOn(sessionStorage, 'clear');
    jest.spyOn(authService, 'singOut').mockReturnValueOnce(of(undefined));

    // Act
    logOutUseCase.execute().subscribe(() => {
      // Assert
      expect(authService.singOut).toHaveBeenCalled();
      expect(localStorage.clear).toHaveBeenCalled();
      expect(sessionStorage.clear).toHaveBeenCalled();
    });
  });
});
