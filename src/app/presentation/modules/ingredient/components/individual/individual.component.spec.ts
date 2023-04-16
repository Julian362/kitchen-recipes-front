import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of, throwError } from 'rxjs';
import { IngredientModel } from '../../../../../infrastructure/models/ingredient.model';
import { IndividualIngredientComponent } from './individual.component';

describe('IndividualIngredientComponent', () => {
  let component: IndividualIngredientComponent;
  let fixture: ComponentFixture<IndividualIngredientComponent>;
  let delegateMock: jest.Mocked<Delegate>;
  let swalMock: jest.Mocked<SwalService>;
  let activatedRouteMock: any;

  beforeEach(() => {
    delegateMock = {
      toGetIngredient: jest.fn(),
      execute: jest.fn(),
    } as any;
    swalMock = {
      toFire: jest.fn(),
    } as any;
    activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jest.fn(),
        },
      },
    };

    TestBed.configureTestingModule({
      declarations: [IndividualIngredientComponent],
      providers: [
        { provide: Delegate, useValue: delegateMock },
        { provide: SwalService, useValue: swalMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualIngredientComponent);
    component = fixture.componentInstance;
  });

  it('should set ingredient on successful execution', () => {
    const ingredientModel: IngredientModel = {
      description: 'Test Description',
      name: 'Test Name',
      photoUrl: 'Test URL',
      _id: 'Test ID',
    };

    delegateMock.execute.mockReturnValue(of(ingredientModel));

    component.ngOnInit();

    expect(delegateMock.toGetIngredient).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalled();
    expect(component.ingredient).toEqual(ingredientModel);
  });

  it('should call swal.toFire with error message on error', () => {
    const errorMessage = 'Error message';
    delegateMock.execute.mockReturnValue(
      throwError(() => new Error(errorMessage))
    );

    component.ngOnInit();

    expect(delegateMock.toGetIngredient).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalled();
    expect(swalMock.toFire).toHaveBeenCalledWith(
      'Error',
      errorMessage,
      'error'
    );
  });
});
