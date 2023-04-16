import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { of, throwError } from 'rxjs';
import { SwalService } from '../../../../shared/services/swal.service';
import { IngredientAllComponent } from './all.component';

describe('IngredientAllComponent', () => {
  let component: IngredientAllComponent;
  let fixture: ComponentFixture<IngredientAllComponent>;
  let delegateMock: jest.Mocked<Delegate>;
  let swalMock: jest.Mocked<SwalService>;

  beforeEach(() => {
    // Arrange
    delegateMock = {
      toGetAllIngredients: jest.fn(),
      execute: jest.fn(),
    } as any;
    swalMock = {
      toFire: jest.fn(),
    } as any;

    TestBed.configureTestingModule({
      declarations: [IngredientAllComponent],
      providers: [
        { provide: Delegate, useValue: delegateMock },
        { provide: SwalService, useValue: swalMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientAllComponent);
    component = fixture.componentInstance;
  });

  it('should call toGetAllIngredients and subscribe to execute', () => {
    // Arrange
    const ingredientModelArray: IngredientModel[] = [
      {
        description: 'Test Description',
        name: 'Test Name',
        photoUrl: 'Test URL',
        _id: 'Test ID',
      },
    ] as IngredientModel[];
    delegateMock.execute.mockReturnValue(of(ingredientModelArray));

    // Act
    component.ngOnInit();

    // Assert
    expect(delegateMock.toGetAllIngredients).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalled();
    expect(component.ingredients).toEqual(ingredientModelArray);
  });

  it('should call swal.toFire with error message on error', () => {
    // Arrange
    const errorMessage = 'Error message';
    delegateMock.execute.mockReturnValue(
      throwError(() => new Error(errorMessage))
    );

    // Act
    component.ngOnInit();

    // Assert
    expect(delegateMock.toGetAllIngredients).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalled();
    expect(swalMock.toFire).toHaveBeenCalledWith(
      'Error',
      errorMessage,
      'error'
    );
  });
});
