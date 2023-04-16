import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of } from 'rxjs';
import { IngredientOneComponent } from './ingredient-one.component';

describe('IngredientOneComponent', () => {
  let component: IngredientOneComponent;
  let fixture: ComponentFixture<IngredientOneComponent>;
  let mockDelegate: jest.Mocked<Delegate>;
  let mockSwalService: jest.Mocked<SwalService>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockDelegate = {
      toGetIngredient: jest.fn(),
      execute: jest.fn().mockReturnValue(of({} as IngredientModel)),
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
      declarations: [IngredientOneComponent],
      providers: [
        { provide: Delegate, useValue: mockDelegate },
        { provide: SwalService, useValue: mockSwalService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientOneComponent);
    component = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('should call getOneById with the correct ID', () => {
      // Act
      component.ngOnInit();

      // Assert
      expect(component.ingredient).toEqual(new IngredientModel());
      expect(mockDelegate.toGetIngredient).toHaveBeenCalled();
    });
  });

  describe('getOneById', () => {
    it('should set the ingredient property when the Delegate service returns a successful response', () => {
      // Arrange
      const ingredientModel: IngredientModel = {
        _id: '1',
        name: 'Test Ingredient',
        description: 'Test Description',
        photoUrl: 'Test Photo URL',
      };
      mockDelegate.execute.mockReturnValue(of(ingredientModel));

      // Act
      component.getOneById('1');

      // Assert
      expect(mockDelegate.toGetIngredient).toHaveBeenCalled();
      expect(mockDelegate.execute).toHaveBeenCalledWith('1');
      expect(component.ingredient).toEqual(ingredientModel);
      expect(mockSwalService.toFire).not.toHaveBeenCalled();
    });
  });
});
