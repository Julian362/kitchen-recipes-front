import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let delegate: Delegate;
  let router: Router;
  let swal: SwalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: Delegate,
          useValue: { toLogin: jest.fn(), execute: jest.fn() },
        },
        { provide: Router, useValue: { navigate: jest.fn() } },
        { provide: SwalService, useValue: { toFire: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    delegate = TestBed.inject(Delegate);
    router = TestBed.inject(Router);
    swal = TestBed.inject(SwalService);
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should call the necessary methods on login success', () => {
    // Arrange
    const delegateSpy = jest.spyOn(delegate, 'toLogin');
    const executeSpy = jest.spyOn(delegate, 'execute').mockReturnValue(of());
    const swalSpy = jest.spyOn(swal, 'toFire');
    const routerSpy = jest.spyOn(router, 'navigate');

    // Act
    component.login();

    // Assert
    expect(delegateSpy).toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalled();
    expect(swalSpy).toHaveBeenCalledWith('Success', 'Login success', 'success');
    expect(routerSpy).toHaveBeenCalledWith(['/recipe']);
  });

  it('should call the necessary methods on login error', () => {
    // Arrange
    const delegateSpy = jest.spyOn(delegate, 'toLogin');
    const executeSpy = jest
      .spyOn(delegate, 'execute')
      .mockReturnValue(of({ message: 'Error' }));
    const swalSpy = jest.spyOn(swal, 'toFire');

    // Act
    component.login();

    // Assert
    expect(delegateSpy).toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalled();
    expect(swalSpy).toHaveBeenCalledWith('Success', 'Login success', 'success');
  });
});
