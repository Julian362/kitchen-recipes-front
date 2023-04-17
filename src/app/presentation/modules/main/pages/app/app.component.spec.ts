import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Delegate } from '@application/delegate';
import { PlannerComponent } from '@presentation/shared/components/planner/planner.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavbarComponent, PlannerComponent],
      providers: [
        {
          provide: Delegate,
          useValue: { toLogout: jest.fn(), execute: jest.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should contain app-navbar element', () => {
    // Arrange

    // Act
    const appNavbarElement = fixture.nativeElement.querySelector('app-navbar');

    // Assert
    expect(appNavbarElement).toBeTruthy();
  });
});
