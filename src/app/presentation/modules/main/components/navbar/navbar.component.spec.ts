import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of } from 'rxjs';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let delegate: Delegate;
  let router: Router;
  let swal: SwalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: Delegate,
          useValue: { toLogout: jest.fn(), execute: jest.fn() },
        },
        { provide: Router, useValue: { navigate: jest.fn() } },
        { provide: SwalService, useValue: { toFire: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    delegate = TestBed.inject(Delegate);
    router = TestBed.inject(Router);
    swal = TestBed.inject(SwalService);
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should call the necessary methods on logOut success', () => {
    // Arrange
    const delegateSpy = jest.spyOn(delegate, 'toLogout');
    const executeSpy = jest.spyOn(delegate, 'execute').mockReturnValue(of());
    const swalSpy = jest.spyOn(swal, 'toFire');
    const routerSpy = jest.spyOn(router, 'navigate');

    // Act
    component.logOut();

    // Assert
    expect(delegateSpy).toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalled();
    expect(swalSpy).toHaveBeenCalledWith(
      'Success',
      'Has cerrado sesión correctamente',
      'success'
    );
    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });

  it('should call the necessary methods on logOut error', () => {
    // Arrange
    const delegateSpy = jest.spyOn(delegate, 'toLogout');
    const executeSpy = jest
      .spyOn(delegate, 'execute')
      .mockReturnValue(of({ message: 'Error' }));
    const swalSpy = jest.spyOn(swal, 'toFire');

    // Act
    component.logOut();

    // Assert
    expect(delegateSpy).toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalled();
    expect(swalSpy).toHaveBeenCalledWith(
      'Success',
      'Has cerrado sesión correctamente',
      'success'
    );
  });

  it('should return true for localStorage() when "id" is present', () => {
    // Arrange
    localStorage.setItem('id', '12345');

    // Act
    const result = component.localStorage();

    // Assert
    expect(result).toBeTruthy();
  });

  it('should return false for localStorage() when "id" is not present', () => {
    // Arrange
    localStorage.removeItem('id');

    // Act
    const result = component.localStorage();

    // Assert
    expect(result).toBeFalsy();
  });
});
