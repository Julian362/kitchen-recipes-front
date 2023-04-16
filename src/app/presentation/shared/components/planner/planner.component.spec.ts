import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { AddPlannerService } from '@presentation/modules/meal-planner/services/add-planner.service';
import { of } from 'rxjs';
import { PlannerComponent } from './planner.component';

describe('PlannerComponent', () => {
  let component: PlannerComponent;
  let fixture: ComponentFixture<PlannerComponent>;
  let mockAddPlannerService: jest.Mocked<AddPlannerService>;

  beforeEach(async () => {
    mockAddPlannerService = {
      getMealPlannerActual: jest.fn(),
    } as unknown as jest.Mocked<AddPlannerService>;

    await TestBed.configureTestingModule({
      declarations: [PlannerComponent],
      providers: [
        { provide: AddPlannerService, useValue: mockAddPlannerService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerComponent);
    component = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('should set the ingredientPlanner property when the AddPlannerService returns a successful response', () => {
      // Arrange
      const mealPlanner: MealPlannerModel = {
        name: '',
        notes: '',
        _id: '',
        amount: [
          { ingredientId: '1', amount: 2 },
          { ingredientId: '2', amount: 4 },
        ],
      };
      mockAddPlannerService.getMealPlannerActual.mockReturnValue(
        of(mealPlanner)
      );

      // Act
      component.ngOnInit();

      // Assert
      expect(component.ingredientPlanner).toEqual([
        { ingredient: '1', amount: 2 },
        { ingredient: '2', amount: 4 },
      ]);
      expect(mockAddPlannerService.getMealPlannerActual).toHaveBeenCalled();
    });

    it('should not set the ingredientPlanner property when the AddPlannerService returns a null response', () => {
      // Arrange
      mockAddPlannerService.getMealPlannerActual.mockReturnValue(
        of(null) as any
      );

      // Act
      component.ngOnInit();

      // Assert
      expect(component.ingredientPlanner).toEqual([]);
      expect(mockAddPlannerService.getMealPlannerActual).toHaveBeenCalled();
    });
  });

  describe('getIngredientMealPlanner', () => {
    it('should return an array of objects with the correct properties', () => {
      // Arrange
      const mealPlanner: MealPlannerModel = {
        name: '',
        notes: '',
        _id: '',
        amount: [
          { ingredientId: '1', amount: 2 },
          { ingredientId: '2', amount: 4 },
        ],
      };

      // Act
      const result = component.getIngredientMealPlanner(mealPlanner);

      // Assert
      expect(result).toEqual([
        { ingredient: '1', amount: 2 },
        { ingredient: '2', amount: 4 },
      ]);
    });

    it('should return an empty array when the mealPlanner parameter is empty', () => {
      // Arrange
      const mealPlanner: MealPlannerModel = {
        name: '',
        notes: '',
        _id: '',
        amount: [],
      };

      // Act
      const result = component.getIngredientMealPlanner(mealPlanner);

      // Assert
      expect(result).toEqual([]);
    });
  });
});
