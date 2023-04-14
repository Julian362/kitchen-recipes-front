import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAllComponent } from './all.component';

describe('AllComponent', () => {
  let component: IngredientAllComponent;
  let fixture: ComponentFixture<IngredientAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
