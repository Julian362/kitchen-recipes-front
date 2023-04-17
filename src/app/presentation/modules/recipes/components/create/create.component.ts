import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Delegate } from '@application/delegate';
import { CreateRecipeCommand } from '@infrastructure/command';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'app-create-recipes',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  searchTerm: string = '';

  recipeForm!: FormGroup;

  ingredients: IngredientModel[] = [];
  ingredientsFiltered: IngredientModel[] = [];

  constructor(
    private frm: FormBuilder,
    private readonly delegate: Delegate,
    private readonly swal: SwalService
  ) {}

  ngOnInit() {
    this.delegate.toGetAllIngredients();
    this.delegate.execute().subscribe({
      next: (res) => {
        this.ingredients = res as IngredientModel[];
      },
      error: (err) => {
        this.swal.toFire('Error', err.message, 'error');
      },
    });
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
    const ingredients: CreateRecipeCommand = {
      description: this.recipeForm.value.description,
      ingredients: this.recipeForm.value.ingredients,
      name: this.recipeForm.value.name,
      notes: this.recipeForm.value.notes,
      photoUrl: this.recipeForm.value.photoUrl,
      servings: this.recipeForm.value.servings,
      steps: this.recipeForm.value.steps,
      nutritionInfo: this.recipeForm.value.nutritionInfo,
      userId: localStorage.getItem('id')!,
    };
    this.delegate.execute(ingredients).subscribe({
      error: (err) => {
        this.swal.toFire('Error', err.message, 'error');
      },
      complete: () => {
        this.swal.toFire('Success', 'Receta creada', 'success');
        this.recipeForm.setValue({});
      },
    });
  }
}
