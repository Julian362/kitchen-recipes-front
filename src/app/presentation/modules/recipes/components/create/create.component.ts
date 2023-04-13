import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Delegate } from '@application/delegate';
import { CreateRecipeCommand } from '@infrastructure/command';

@Component({
  selector: 'app-create-recipes',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  recipeForm!: FormGroup;

  constructor(private frm: FormBuilder, private readonly delegate: Delegate) {}

  ngOnInit() {
    this.recipeForm = this.frm.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', Validators.required],
      ingredients: this.frm.array([]),
      photoUrl: ['', Validators.required],
      steps: this.frm.array([]),
      notes: '',
      servings: ['', Validators.required],
      nutritionInfo: '',
    });
  }

  get ingredientForms() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredient = this.frm.group({
      amount: ['', Validators.required],
      ingredientId: ['', Validators.required],
    });
    this.ingredientForms.push(ingredient);
  }

  removeIngredient(index: number) {
    this.ingredientForms.removeAt(index);
  }

  get stepForms() {
    return this.recipeForm.get('steps') as FormArray;
  }

  addStep() {
    const step = this.frm.control('', Validators.required);
    this.stepForms.push(step);
  }

  removeStep(index: number) {
    this.stepForms.removeAt(index);
  }

  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }
    this.delegate.toCreateRecipe();
    const ingredients: CreateRecipeCommand = this.recipeForm.value.ingredients;
    ingredients.userId = localStorage.getItem('id')!;
    this.delegate.execute(this.recipeForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
    console.log(this.recipeForm.value);
  }
}
