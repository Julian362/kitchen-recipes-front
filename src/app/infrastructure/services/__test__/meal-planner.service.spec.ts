import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MealPlannerModel } from '@infrastructure/models/meal-planner.model';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MealPlannerService } from '../meal-planner.service';

describe('MealPlannerService', () => {
  let mealPlannerService: MealPlannerService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MealPlannerService],
    });
    mealPlannerService = TestBed.inject(MealPlannerService);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    // Arrange
    const mealPlanner: MealPlannerModel = {
      _id: '1',
      name: 'MealPlanner 1',
      amount: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
    };
    jest.spyOn(http, 'post').mockReturnValue(of(mealPlanner));

    // Act
    mealPlannerService.create(mealPlanner).subscribe((res) => {
      // Assert
      expect(res).toEqual(mealPlanner);
    });

    // Assert
    expect(http.post).toHaveBeenCalledWith(
      `${environment.HOST}/meal-planner`,
      mealPlanner
    );
  });

  it('should find a mealPlanner by id', () => {
    // Arrange
    const mealPlannerId = '1';
    const mealPlanner: MealPlannerModel = {
      _id: mealPlannerId,
      name: 'MealPlanner 1',
      amount: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
    };
    jest.spyOn(http, 'get').mockReturnValue(of(mealPlanner));

    // Act
    mealPlannerService.findById(mealPlannerId).subscribe((res) => {
      // Assert
      expect(res).toEqual(mealPlanner);
    });

    // Assert
    expect(http.get).toHaveBeenCalledWith(
      `${environment.HOST}/meal-planner/${mealPlannerId}`
    );
  });

  it('should update a mealPlanner', () => {
    // Arrange
    const mealPlannerId = '1';
    const mealPlanner: MealPlannerModel = {
      _id: mealPlannerId,
      name: 'MealPlanner 1',
      amount: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
    };
    jest.spyOn(http, 'put').mockReturnValue(of(mealPlanner));

    // Act
    mealPlannerService.update(mealPlannerId, mealPlanner).subscribe((res) => {
      // Assert
      expect(res).toEqual(mealPlanner);
    });

    // Assert
    expect(http.put).toHaveBeenCalledWith(
      `${environment.HOST}/meal-planner/${mealPlannerId}`,
      mealPlanner
    );
  });

  it('should delete a mealPlanner', () => {
    // Arrange
    const mealPlannerId = '1';
    jest.spyOn(http, 'delete').mockReturnValue(of(null));

    // Act
    mealPlannerService.delete(mealPlannerId).subscribe((res) => {
      // Assert
      expect(res).toBeNull();
    });

    // Assert
    expect(http.delete).toHaveBeenCalledWith(
      `${environment.HOST}/meal-planner/${mealPlannerId}`
    );
  });
});
