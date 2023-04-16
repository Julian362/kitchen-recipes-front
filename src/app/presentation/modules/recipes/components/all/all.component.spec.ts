import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Delegate } from '@application/delegate';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { AddPlannerService } from '@presentation/modules/meal-planner/services/add-planner.service';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of, throwError } from 'rxjs';
import { RecipeAllComponent } from './all.component';

describe('RecipeAllComponent', () => {
  let component: RecipeAllComponent;
  let fixture: ComponentFixture<RecipeAllComponent>;
  let delegateMock: jest.Mocked<Delegate>;
  let addPlannerServiceMock: jest.Mocked<AddPlannerService>;
  let swalMock: jest.Mocked<SwalService>;

  beforeEach(async () => {
    delegateMock = {
      toGetRecipesByUser: jest.fn(),
      execute: jest.fn().mockReturnValue(of([])),
      toGetIngredient: jest.fn(),
    } as unknown as jest.Mocked<Delegate>;

    addPlannerServiceMock = {
      addPlanner: jest.fn(),
    } as unknown as jest.Mocked<AddPlannerService>;

    swalMock = {
      toFire: jest.fn(),
    } as unknown as jest.Mocked<SwalService>;

    await TestBed.configureTestingModule({
      declarations: [RecipeAllComponent],
      providers: [
        { provide: Delegate, useValue: delegateMock },
        { provide: AddPlannerService, useValue: addPlannerServiceMock },
        { provide: SwalService, useValue: swalMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should get recipes on init', () => {
    // Arrange
    const recipes = [
      {
        _id: '1',
        name: 'Test Recipe',
        description: 'Test Description',
        ingredients: [{ ingredientId: '1', amount: 1 }],
        notes: '',
        userId: '1',
        photoUrl: '',
        servings: 1,
        steps: ['Test Steps '],
        nutritionInfo: 'Test Nutrition Info',
      },
    ] as RecipesModel[];
    delegateMock.execute.mockReturnValue(of(recipes));

    // Act
    component.ngOnInit();

    // Assert
    expect(delegateMock.toGetRecipesByUser).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalledWith(
      localStorage.getItem('id')
    );
    expect(delegateMock.toGetIngredient).toHaveBeenCalled();
    expect(component.recipes).toEqual(recipes);
  });

  it('should handle error on init', () => {
    // Arrange
    const message = 'Error message';
    const error = new Error(message);
    delegateMock.execute.mockReturnValue(throwError(error));

    // Act
    component.ngOnInit();

    // Assert
    expect(delegateMock.toGetRecipesByUser).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalledWith(
      localStorage.getItem('id')
    );
    expect(swalMock.toFire).toHaveBeenCalledWith('Error', message, 'error');
  });

  it('should add meal planner', () => {
    // Arrange
    const recipe = {
      _id: '1',
      name: 'Test Recipe',
      description: 'Test Description',
      ingredients: [{ ingredientId: '1', amount: 1 }],
      notes: '',
      userId: '1',
      photoUrl: '',
      servings: 1,
      steps: ['Test Steps '],
      nutritionInfo: 'Test Nutrition Info',
    } as RecipesModel;

    const mealPlanner: MealPlannerModel = {
      name: recipe.name,
      amount: recipe.ingredients.map((ingredient) => ({
        ingredientId: ingredient.ingredientId,
        amount: ingredient.amount,
      })),
      notes: recipe.notes ?? '',
    };

    // Act
    component.addMealPlanner(recipe);

    // Assert
    expect(addPlannerServiceMock.addPlanner).toHaveBeenCalledWith(mealPlanner);
  });
});
