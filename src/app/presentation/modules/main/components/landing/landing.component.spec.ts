import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should render the component template', () => {
    // Act
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();

    // Assert
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Bienvenido a nuestra aplicación de recetas'
    );
  });
});
