import {
  authServiceMock,
  getIdMock,
  userServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UserDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { LoginUseCase } from '../../security/login.use-case';

describe('GetUserUseCase', () => {
  let useCase: LoginUseCase;
  let observable: Observable<{
    data: UserDomainModel;
    token: string;
  }>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new LoginUseCase(userServiceMock, authServiceMock);
      // Act
      observable = useCase.execute(getIdMock);
    });
    it('should be defined', () => {
      // Assert
      expect(useCase).toBeDefined();
    });
    it('should return an observable', () => {
      // Assert
      expect(observable).toBeInstanceOf(Observable);
    });
    it('should call the service', () => {
      // Assert
      expect(authServiceMock.authCredentials).toBeCalled();
    });
  });
});
