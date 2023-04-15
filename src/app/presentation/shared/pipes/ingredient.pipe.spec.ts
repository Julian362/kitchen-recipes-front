import { TestBed } from '@angular/core/testing';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { of } from 'rxjs';
import { IngredientPipe } from './ingredient.pipe';

describe('IngredientPipe', () => {
  let pipe: IngredientPipe;
  let delegateMock: any;

  beforeEach(() => {
    delegateMock = {
      toGetIngredient: jest.fn(),
      execute: jest.fn(),
    };
    TestBed.configureTestingModule({
      providers: [
        IngredientPipe,
        { provide: Delegate, useValue: delegateMock },
      ],
    });
    pipe = TestBed.inject(IngredientPipe);
  });

  describe('transform', () => {
    it('should return the name of the ingredient when execute method is successful', (done) => {
      // Arrange
      const ingredientId = '123';
      const ingredientMock = { id: ingredientId, name: 'Ingredient 1' };
      jest.spyOn(delegateMock, 'execute').mockReturnValue(of(ingredientMock));

      // Act
      pipe.transform(ingredientId).subscribe((result) => {
        // Assert
        expect(result).toBe('Ingredient 1');
        expect(delegateMock.toGetIngredient).toHaveBeenCalled();
        expect(delegateMock.execute).toHaveBeenCalledWith<[IngredientModel]>(
          ingredientId as any
        );
        done();
      });
    });
  });

  describe('Error', () => {
    it('should return empty string when execute method is not successful', (done) => {
      // Arrange
      const ingredientId = '123';
      jest.spyOn(delegateMock, 'execute').mockReturnValue(of(null));

      // Act
      pipe.transform(ingredientId).subscribe({
        error: (error) => {
          // Assert
          expect(delegateMock.toGetIngredient).toHaveBeenCalled();
          expect(delegateMock.execute).toHaveBeenCalledWith<[IngredientModel]>(
            ingredientId as any
          );
          done();
        },
      });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
