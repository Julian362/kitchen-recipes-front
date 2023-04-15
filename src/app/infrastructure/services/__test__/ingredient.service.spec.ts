import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IngredientService } from '../ingredient.service';

describe('IngredientService', () => {
  let ingredientService: IngredientService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IngredientService],
    });
    ingredientService = TestBed.inject(IngredientService);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create an ingredient', () => {
    //Arrange
    const ingredient: IngredientModel = {
      _id: '1',
      name: 'Ingredient 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
    };
    jest.spyOn(http, 'post').mockReturnValue(of(ingredient));

    //Act
    ingredientService.create(ingredient).subscribe((res) => {
      //Assert
      expect(res).toEqual(ingredient);
    });
    expect(http.post).toHaveBeenCalledWith(
      `${environment.HOST}/ingredient`,
      ingredient
    );
  });

  it('should find an ingredient by id', () => {
    //Arrange
    const ingredientId = '1';
    const ingredient = { id: ingredientId, name: 'Ingredient 1' };
    jest.spyOn(http, 'get').mockReturnValue(of(ingredient));

    //Act
    ingredientService.findById(ingredientId).subscribe((res) => {
      //Assert
      expect(res).toEqual(ingredient);
    });
    expect(http.get).toHaveBeenCalledWith(
      `${environment.HOST}/ingredient/${ingredientId}`
    );
  });

  it('should update an ingredient', () => {
    //Arrange
    const ingredientId = '1';
    const ingredient: IngredientModel = {
      _id: '1',
      name: 'Ingredient 1',
      description: 'Description 1',
      photoUrl: 'photoUrl 1',
    };
    jest.spyOn(http, 'put').mockReturnValue(of(ingredient));

    //Act
    ingredientService.update(ingredientId, ingredient).subscribe((res) => {
      //Assert
      expect(res).toEqual(ingredient);
    });
    expect(http.put).toHaveBeenCalledWith(
      `${environment.HOST}/ingredient/${ingredientId}`,
      ingredient
    );
  });

  it('should find all ingredients', () => {
    //Arrange
    const ingredients = [
      { id: '1', name: 'Ingredient 1' },
      { id: '2', name: 'Ingredient 2' },
    ];
    jest.spyOn(http, 'get').mockReturnValue(of(ingredients));

    //Act
    ingredientService.findAll().subscribe((res) => {
      //Assert
      expect(res).toEqual(ingredients);
    });
    expect(http.get).toHaveBeenCalledWith(`${environment.HOST}/ingredient`);
  });

  it('should find an ingredient by name', () => {
    //Arrange
    const ingredientName = 'Ingredient 1';
    const ingredient = { id: '1', name: ingredientName };
    jest.spyOn(http, 'get').mockReturnValue(of(ingredient));

    //Act
    ingredientService.findByName(ingredientName).subscribe((res) => {
      //Assert
      expect(res).toEqual(ingredient);
    });
    expect(http.get).toHaveBeenCalledWith(
      `${environment.HOST}/ingredient/name/${ingredientName}`
    );
  });

  afterEach(() => {
    httpMock.verify();
  });
});
