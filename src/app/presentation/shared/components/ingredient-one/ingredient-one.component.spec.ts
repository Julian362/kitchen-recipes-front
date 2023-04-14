import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientOneComponent } from './ingredient-one.component';

describe('IngredientOneComponent', () => {
  let component: IngredientOneComponent;
  let fixture: ComponentFixture<IngredientOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
