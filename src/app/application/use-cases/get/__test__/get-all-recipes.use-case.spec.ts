import {
  getIdMock,
  recipeServiceMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { RecipeDomainModel } from '@domain/models';
import { Observable } from 'rxjs';
import { GetAllRecipesUseCase } from '../get-all-recipes.use-case';

describe('GetAllRecipesUseCase', () => {
  let useCase: GetAllRecipesUseCase;
  let observable: Observable<RecipeDomainModel[]>;
  describe('execute', () => {
    beforeEach(() => {
      useCase = new GetAllRecipesUseCase(recipeServiceMock);
      observable = useCase.execute(getIdMock);
    });
    it('should be defined', () => {
      expect(useCase).toBeDefined();
    });
    it('should return an observable', () => {
      expect(observable).toBeInstanceOf(Observable);
    });
    it('should call the service', () => {
      expect(recipeServiceMock.findAllByUserId).toBeCalled();
    });
  });
});
