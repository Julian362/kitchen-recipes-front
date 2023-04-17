import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of, throwError } from 'rxjs';
import { IndividualRecipeComponent } from './individual.component';

describe('IndividualRecipeComponent', () => {
  let component: IndividualRecipeComponent;
  let fixture: ComponentFixture<IndividualRecipeComponent>;
  let mockDelegate: jest.Mocked<Delegate>;
  let mockSwalService: jest.Mocked<SwalService>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockDelegate = {
      toGetRecipe: jest.fn(),
      execute: jest.fn().mockReturnValue(of({} as RecipesModel)),
    } as unknown as jest.Mocked<Delegate>;
    mockSwalService = {
      toFire: jest.fn(),
    } as jest.Mocked<SwalService>;
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jest.fn().mockReturnValue('1'),
        },
      },
    };
    await TestBed.configureTestingModule({
      declarations: [IndividualRecipeComponent],
      providers: [
        { provide: Delegate, useValue: mockDelegate },
        { provide: SwalService, useValue: mockSwalService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualRecipeComponent);
    component = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('should call getOneById with the correct ID', () => {
      // Arrange
      const id = '1';

      // Act
      component.ngOnInit();

      // Assert
      expect(mockActivatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith(
        'id'
      );
      expect(mockDelegate.toGetRecipe).toHaveBeenCalled();
      expect(mockDelegate.execute).toHaveBeenCalledWith(id);
    });
  });

  describe('getOneById', () => {
    it('should set the recipe property when the Delegate service returns a successful response', () => {
      // Arrange
      const recipesModel: RecipesModel = {
        _id: '1',
        name: 'Test Recipe',
        ingredients: [{ ingredientId: '1', amount: 1 }],
        steps: ['Step 1', 'Step 2'],
        description: 'Test Description',
        notes: '',
        userId: '1',
        photoUrl: '',
        servings: 1,
        nutritionInfo: '',
      };
      mockDelegate.execute.mockReturnValue(of(recipesModel));

      // Act
      component.getOneById('1');

      // Assert
      expect(mockDelegate.toGetRecipe).toHaveBeenCalled();
      expect(mockDelegate.execute).toHaveBeenCalledWith('1');
      expect(component.recipe).toEqual(recipesModel);
      expect(mockSwalService.toFire).not.toHaveBeenCalled();
    });

    it('should show an error message when the Delegate service returns an error', () => {
      // Arrange
      const error = new Error('Test error');
      mockDelegate.execute.mockReturnValue(of(error));

      // Act
      component.getOneById('1');

      // Assert
      expect(mockDelegate.toGetRecipe).toHaveBeenCalled();
      expect(mockDelegate.execute).toHaveBeenCalledWith('1');
    });

    it('should a swal error message when the Delegate service returns an error', () => {
      // Arrange
      const error = new Error('Test error');
      mockDelegate.execute.mockReturnValue(throwError(() => Error));

      // Act
      component.getOneById('1');

      // Assert
      expect(mockDelegate.toGetRecipe).toHaveBeenCalled();
      expect(mockDelegate.execute).toHaveBeenCalledWith('1');
      expect(mockSwalService.toFire).toHaveBeenCalled();
    });
  });
});
