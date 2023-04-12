import {
  deleteIdMock,
  userServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UserDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { DeleteUserUseCase } from '../delete-user.use-case';

describe('DeleteUserUseCase', () => {
  let useCase: DeleteUserUseCase;
  let observable: Observable<UserDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new DeleteUserUseCase(userServiceMock);
      // Act
      observable = useCase.execute(deleteIdMock);
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
      expect(userServiceMock.delete).toBeCalled();
    });
  });
});
