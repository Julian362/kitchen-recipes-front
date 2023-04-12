import {
  getIdMock,
  userServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UserDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { GetUserUseCase } from '../get-user.use-case';

describe('GetUserUseCase', () => {
  let useCase: GetUserUseCase;
  let observable: Observable<UserDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new GetUserUseCase(userServiceMock);
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
      expect(userServiceMock.findById).toBeCalled();
    });
  });
});
