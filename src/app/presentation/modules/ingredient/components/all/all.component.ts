import { Component, OnInit } from '@angular/core';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { SwalService } from '../../../../shared/services/swal.service';

@Component({
  selector: 'ingredient-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class IngredientAllComponent implements OnInit {
  ingredients!: IngredientModel[];
  constructor(
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
  }
}
