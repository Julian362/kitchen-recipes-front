import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualIngredientComponent } from './individual.component';

describe('IndividualComponent', () => {
  let component: IndividualIngredientComponent;
  let fixture: ComponentFixture<IndividualIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualIngredientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
