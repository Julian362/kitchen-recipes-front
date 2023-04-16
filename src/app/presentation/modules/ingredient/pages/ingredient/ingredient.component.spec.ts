import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngredientComponent } from './ingredient.component';

describe('IngredientComponent', () => {
  let component: IngredientComponent;
  let fixture: ComponentFixture<IngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should contain router-outlet element', () => {
    // Arrange

    // Act
    const routerOutletElement =
      fixture.nativeElement.querySelector('router-outlet');

    // Assert
    expect(routerOutletElement).toBeTruthy();
  });
});
