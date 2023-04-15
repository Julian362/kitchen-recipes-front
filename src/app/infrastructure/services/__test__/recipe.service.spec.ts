import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { RecipeService } from '../recipe.service';

describe('RecipeService', () => {
  let recipeService: RecipeService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeService],
    });
    recipeService = TestBed.inject(RecipeService);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(recipeService).toBeTruthy();
  });

  it('should create a recipe', () => {
    // Arrange
    const recipe: RecipesModel = {
      _id: '1',
      name: 'Recipe 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
      ingredients: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
      steps: [],
      servings: 0,
    };
    jest.spyOn(http, 'post').mockReturnValue(of(recipe));

    // Act
    recipeService.create(recipe).subscribe((res) => {
      // Assert
      expect(res).toEqual(recipe);
    });

    // Assert
    expect(http.post).toHaveBeenCalledWith(
      `${environment.HOST}/recipe`,
      recipe
    );
  });

  it('should find a recipe by id', () => {
    // Arrange
    const recipe: RecipesModel = {
      _id: '1',
      name: 'Recipe 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
      ingredients: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
      steps: [],
      servings: 0,
    };
    jest.spyOn(http, 'get').mockReturnValue(of(recipe));

    // Act
    recipeService.findById('1').subscribe((res) => {
      // Assert
      expect(res).toEqual(recipe);
    });

    // Assert
    expect(http.get).toHaveBeenCalledWith(`${environment.HOST}/recipe/1`);
  });

  it('should update a recipe', () => {
    // Arrange
    const recipe: RecipesModel = {
      _id: '1',
      name: 'Recipe 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
      ingredients: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
      steps: [],
      servings: 0,
    };
    jest.spyOn(http, 'put').mockReturnValue(of(recipe));
    const id = '1';
    // Act
    recipeService.update(id, recipe).subscribe((res) => {
      // Assert
      expect(res).toEqual(recipe);
    });

    // Assert
    expect(http.put).toHaveBeenCalledWith(
      `${environment.HOST}/recipe/${id}`,
      recipe
    );
  });

  it('should delete a recipe', () => {
    // Arrange
    const recipe: RecipesModel = {
      _id: '1',
      name: 'Recipe 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
      ingredients: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
      steps: [],
      servings: 0,
    };
    jest.spyOn(http, 'delete').mockReturnValue(of(recipe));
    const id = '1';
    // Act
    recipeService.delete(id).subscribe((res) => {
      // Assert
      expect(res).toEqual(recipe);
    });

    // Assert
    expect(http.delete).toHaveBeenCalledWith(
      `${environment.HOST}/recipe/${id}`
    );
  });

  it('should find all recipes by user id', () => {
    // Arrange
    const recipe: RecipesModel = {
      _id: '1',
      name: 'Recipe 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
      ingredients: [
        {
          ingredientId: 'ingredientId',
          amount: 0,
        },
      ],
      notes: 'Notes 1',
      steps: [],
      servings: 0,
    };
    jest.spyOn(http, 'get').mockReturnValue(of([recipe]));
    const id = '1';
    // Act
    recipeService.findAllByUserId(id).subscribe((res) => {
      // Assert
      expect(res).toEqual([recipe]);
    });

    // Assert
    expect(http.get).toHaveBeenCalledWith(`${environment.HOST}/recipes/${id}`);
  });
});
