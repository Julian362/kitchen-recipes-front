import { CreateUserUseCase } from '@application/use-cases';
import {
  userCommandMock,
  userServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { UserDomainModel } from '@domain/models';
import { Observable } from 'rxjs';

describe('CreateUserUseCase', () => {
  let useCase: CreateUserUseCase;
  let observable: Observable<UserDomainModel>;
  describe('execute', () => {
    beforeEach(() => {
      // Arrange
      useCase = new CreateUserUseCase(userServiceMock);
      // Act
      observable = useCase.execute(userCommandMock);
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
      expect(userServiceMock.create).toBeCalled();
    });
  });
});
