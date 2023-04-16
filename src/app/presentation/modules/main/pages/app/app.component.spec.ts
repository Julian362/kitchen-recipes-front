import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
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
