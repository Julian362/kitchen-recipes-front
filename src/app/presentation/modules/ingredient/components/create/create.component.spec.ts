import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';
import { of, throwError } from 'rxjs';
import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let delegateMock: jest.Mocked<Delegate>;
  let swalMock: jest.Mocked<SwalService>;

  beforeEach(async () => {
    delegateMock = {
      toCreateIngredient: jest.fn(),
      execute: jest.fn(),
    } as unknown as jest.Mocked<Delegate>;

    swalMock = {
      toFire: jest.fn(),
    } as unknown as jest.Mocked<SwalService>;

    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: Delegate, useValue: delegateMock },
        { provide: SwalService, useValue: swalMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should show error message on error', () => {
    // Arrange
    const message = 'Error message';
    const error = new Error(message);
    delegateMock.execute.mockReturnValueOnce(throwError(error));

    // Act
    component.create();

    // Assert
    expect(delegateMock.toCreateIngredient).toHaveBeenCalled();
    expect(delegateMock.execute).toHaveBeenCalledWith(component.form.value);
    expect(swalMock.toFire).toHaveBeenCalledWith('Error', message, 'error');
  });

  it('should show success message on success', () => {
    // Arrange
    delegateMock.execute.mockReturnValueOnce(of({} as any));

    // Act
    component.create();

    // Assert
    expect(delegateMock.toCreateIngredient).toHaveBeenCalled();
    expect(swalMock.toFire).toHaveBeenCalledWith(
      'Success',
      'Ingrediente Creado',
      'success'
    );
  });
});
