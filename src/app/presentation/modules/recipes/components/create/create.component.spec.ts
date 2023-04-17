import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Delegate } from '@application/delegate';
import { CreateRecipeCommand } from '@infrastructure/command';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of, throwError } from 'rxjs';
import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let mockDelegate: jest.Mocked<Delegate>;
  let mockSwalService: jest.Mocked<SwalService>;
  const mockIngredients: IngredientModel[] = [
    {
      description: 'description',
      name: 'name',
      photoUrl: 'photoUrl',
      _id: '1',
    },
  ];

  beforeEach(waitForAsync(() => {
    mockDelegate = {
      toGetAllIngredients: jest.fn(),
      toCreateRecipe: jest.fn(),
      execute: jest.fn().mockReturnValue(of({} as CreateRecipeCommand)),
    } as unknown as jest.Mocked<Delegate>;

    mockSwalService = {
      toFire: jest.fn(),
    } as jest.Mocked<SwalService>;

    TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: Delegate, useValue: mockDelegate },
        { provide: SwalService, useValue: mockSwalService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate ingredients list on init', () => {
    // Arrange
    mockDelegate.execute.mockReturnValue(of(mockIngredients));

    // Act
    component.ngOnInit();

    // Assert
    expect(mockDelegate.toGetAllIngredients).toHaveBeenCalled();
    expect(mockDelegate.execute).toHaveBeenCalled();
    expect(component.ingredients).toEqual(mockIngredients);
  });

  it('should add ingredient to form', () => {
    // Arrange
    const initialLength = component.ingredientForms.length;

    // Act
    component.addIngredient();

    // Assert
    expect(component.ingredientForms.length).toBe(initialLength + 1);
  });

  it('should remove ingredient from form', () => {
    // Arrange
    component.addIngredient();
    const indexToRemove = component.ingredientForms.length - 1;

    // Act
    component.removeIngredient(indexToRemove);

    // Assert
    expect(component.ingredientForms.length).toBe(indexToRemove);
  });

  it('should add step to form', () => {
    // Arrange
    const initialLength = component.stepForms.length;

    // Act
    component.addStep();

    // Assert
    expect(component.stepForms.length).toBe(initialLength + 1);
  });

  it('should remove step from form', () => {
    // Arrange
    component.addStep();
    const indexToRemove = component.stepForms.length - 1;

    // Act
    component.removeStep(indexToRemove);

    // Assert
    expect(component.stepForms.length).toBe(indexToRemove);
  });

  it('should not submit form if invalid', () => {
    // Arrange
    const spyDelegate = jest.spyOn(mockDelegate, 'toCreateRecipe');
    const spySwal = jest.spyOn(mockSwalService, 'toFire');

    // Act
    component.onSubmit();

    // Assert
    expect(spyDelegate).not.toHaveBeenCalled();
    expect(spySwal).not.toHaveBeenCalled();
  });

  it('should swal error if delegate throws error', () => {
    // Arrange
    const spyDelegate = jest.spyOn(mockDelegate, 'toCreateRecipe');
    const spySwal = jest.spyOn(mockSwalService, 'toFire');
    mockDelegate.execute.mockReturnValue(throwError(() => new Error('error')));

    // Act
    component.ngOnInit();

    // Assert
    expect(spySwal).toHaveBeenCalledWith('Error', 'error', 'error');
  });

  it('should OnSubmit call toCreateRecipe', () => {
    // Arrange
    const spyDelegate = jest.spyOn(mockDelegate, 'toCreateRecipe');
    component.recipeForm = {
      invalid: false,
      value: {
        name: 'name',
        description: 'description',
        photoUrl: 'photoUrl',
        ingredients: [],
        steps: [],
      },
      setValue: jest.fn(),
    } as any;
    jest
      .spyOn(mockDelegate, 'execute')
      .mockReturnValue(of({} as CreateRecipeCommand));

    // Act
    component.onSubmit();

    // Assert
    expect(spyDelegate).toHaveBeenCalled();
  });

  it('should call error swal if delegate throws error', () => {
    // Arrange
    const spySwal = jest.spyOn(mockSwalService, 'toFire');
    component.recipeForm = {
      invalid: false,
      value: {
        name: 'name',
        description: 'description',
        photoUrl: 'photoUrl',
        ingredients: [],
        steps: [],
      },
      setValue: jest.fn(),
    } as any;
    jest
      .spyOn(mockDelegate, 'execute')
      .mockReturnValue(throwError(() => new Error('error')));

    // Act
    component.onSubmit();

    // Assert
    expect(spySwal).toHaveBeenCalledWith('Error', 'error', 'error');
  });
});
