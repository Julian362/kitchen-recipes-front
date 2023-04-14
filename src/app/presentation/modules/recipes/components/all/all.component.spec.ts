import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAllComponent } from './all.component';

describe('AllComponent', () => {
  let component: RecipeAllComponent;
  let fixture: ComponentFixture<RecipeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
