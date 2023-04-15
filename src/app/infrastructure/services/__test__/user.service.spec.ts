import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserModel } from '@infrastructure/models/user.model';
import { of, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserService } from '../user.service';
describe('UserService', () => {
  let userService: UserService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    userService = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should create a user', () => {
    // Arrange
    const user: UserModel = {
      _id: '1',
      email: 'email',
      googleId: 'googleId',
      name: 'name',
      mealPlannerId: 'mealPlannerId',
      photoUrl: 'photoUrl',
    };
    jest.spyOn(http, 'post').mockReturnValue(of(user));

    // Act
    userService.create(user).subscribe((res) => {
      // Assert
      expect(res).toEqual(user);
    });

    // Assert
    expect(http.post).toHaveBeenCalledWith(`${environment.HOST}/user`, user);
  });

  it('should find a user by id', () => {
    // Arrange
    const userId = '1';
    const user: UserModel = {
      _id: userId,
      email: 'email',
      googleId: 'googleId',
      name: 'name',
      mealPlannerId: 'mealPlannerId',
      photoUrl: 'photoUrl',
    };
    jest.spyOn(http, 'get').mockReturnValue(of(user));

    // Act
    userService.findById(userId).subscribe((res) => {
      // Assert
      expect(res).toEqual(user);
    });

    // Assert
    expect(http.get).toHaveBeenCalledWith(`${environment.HOST}/user/${userId}`);
  });

  it('should return error when user not found', () => {
    // Arrange
    const userId = '1';
    jest.spyOn(http, 'get').mockReturnValue(of(throwError(() => Error)));

    // Act
    userService.findById(userId).subscribe((err) => {
      // Assert
      expect(err).toEqual('User not found');
      expect(err).toBeInstanceOf(Error);
    });

    // Assert
    expect(http.get).toHaveBeenCalledWith(`${environment.HOST}/user/${userId}`);
  });

  it('should delete a user by id', () => {
    // Arrange
    const userId = '1';
    const user: UserModel = {
      _id: userId,
      email: 'email',
      googleId: 'googleId',
      name: 'name',
      mealPlannerId: 'mealPlannerId',
      photoUrl: 'photoUrl',
    };
    jest.spyOn(http, 'delete').mockReturnValue(of(user));

    // Act
    userService.delete(userId).subscribe((res) => {
      // Assert
      expect(res).toEqual(user);
    });

    // Assert
    expect(http.delete).toHaveBeenCalledWith(
      `${environment.HOST}/user/${userId}`
    );
  });

  afterEach(() => {
    httpMock.verify();
  });
});
