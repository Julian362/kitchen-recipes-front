import { TestBed } from '@angular/core/testing';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { BehaviorSubject, of } from 'rxjs';
import { AddPlannerService } from '../add-planner.service';

describe('AddPlannerService', () => {
  let service: AddPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a meal planner to an empty meal planner', () => {
    // Arrange
    const mockMealPlanner: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 1 },
        { ingredientId: 'ingredient2', amount: 2 },
      ],
    };
    jest
      .spyOn(service, 'getMealPlannerActual')
      .mockReturnValueOnce(of({} as MealPlannerModel));

    // Act
    service.addPlanner(mockMealPlanner);

    // Assert
    service.getMealPlannerActual().subscribe((mealPlanner) => {
      expect(mealPlanner).toEqual(mockMealPlanner);
    });
  });

  it('should add a meal planner to a non-empty meal planner', () => {
    // Arrange
    const mockMealPlannerBefore: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 1 },
        { ingredientId: 'ingredient2', amount: 2 },
      ],
    };
    const mockMealPlannerToAdd: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 2 },
        { ingredientId: 'ingredient3', amount: 3 },
      ],
    };
    jest
      .spyOn(service, 'getMealPlannerActual')
      .mockReturnValueOnce(of(mockMealPlannerBefore));

    // Act
    service.addPlanner(mockMealPlannerToAdd);

    // Assert
    service.getMealPlannerActual().subscribe((mealPlanner) => {
      expect(mealPlanner).toEqual({
        amount: [
          { ingredientId: 'ingredient1', amount: 3 },
          { ingredientId: 'ingredient2', amount: 2 },
          { ingredientId: 'ingredient3', amount: 3 },
        ],
      });
    });
  });

  it('should add a meal planner to a non-empty meal planner with the same ingredient', () => {
    const mealPlannerNow: BehaviorSubject<MealPlannerModel> = {
      _value: {
        name: 'Test Meal Planner',
        notes: 'Test Notes',
        _id: '123',
        amount: [
          { ingredientId: 'ingredient1', amount: 1 },
          { ingredientId: 'ingredient2', amount: 2 },
        ],
      },
    } as unknown as BehaviorSubject<MealPlannerModel>;
    // Arrange
    const mockMealPlannerBefore: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 1 },
        { ingredientId: 'ingredient2', amount: 2 },
      ],
    };
    const mockMealPlannerToAdd: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 2 },
        { ingredientId: 'ingredient2', amount: 3 },
      ],
    };
    jest
      .spyOn(service, 'getMealPlannerActual')
      .mockReturnValueOnce(of(mockMealPlannerBefore));

    // Act
    service.addPlanner(mockMealPlannerToAdd);
    service.addPlanner(mockMealPlannerToAdd);

    // Assert
    service.getMealPlannerActual().subscribe((mealPlanner) => {
      expect(mealPlanner).toEqual({
        amount: [
          { ingredientId: 'ingredient1', amount: 5 },
          { ingredientId: 'ingredient2', amount: 8 },
        ],
      });
    });
  });
  it('should add a meal planner to a non-empty meal planner with the same ingredient', () => {
    const mealPlannerNow: BehaviorSubject<MealPlannerModel> = {
      _value: {
        name: 'Test Meal Planner',
        notes: 'Test Notes',
        _id: '123',
        amount: [
          { ingredientId: 'ingredient1', amount: 1 },
          { ingredientId: 'ingredient2', amount: 2 },
        ],
      },
    } as unknown as BehaviorSubject<MealPlannerModel>;
    // Arrange
    const mockMealPlannerBefore: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 1 },
        { ingredientId: 'ingredient2', amount: 2 },
      ],
    };
    const mockMealPlannerToAdd: MealPlannerModel = {
      name: 'Test Meal Planner',
      notes: 'Test Notes',
      _id: '123',
      amount: [
        { ingredientId: 'ingredient1', amount: 2 },
        { ingredientId: 'ingredient3', amount: 3 },
      ],
    };
    jest
      .spyOn(service, 'getMealPlannerActual')
      .mockReturnValueOnce(of(mockMealPlannerBefore));

    // Act
    service.addPlanner(mockMealPlannerBefore);
    service.addPlanner(mockMealPlannerToAdd);

    // Assert
    service.getMealPlannerActual().subscribe((mealPlanner) => {
      expect(mealPlanner).toEqual({
        amount: [
          { ingredientId: 'ingredient1', amount: 5 },
          { ingredientId: 'ingredient2', amount: 2 },
          { ingredientId: 'ingredient3', amount: 6 },
        ],
      });
    });
  });
});
