import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';
import { IngredientModel } from '../../../../../infrastructure/models/ingredient.model';

@Component({
  selector: 'ingredient-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
})
export class IndividualIngredientComponent implements OnInit {
  ingredient: IngredientModel = new IngredientModel();
  constructor(
    private route: ActivatedRoute,
    private readonly delegate: Delegate,
    private readonly swal: SwalService
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.delegate.toGetIngredient();
    this.delegate.execute<IngredientModel>(this.id).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
      },
      error: (error) => {
        this.swal.toFire('Error', error.message, 'error');
      },
    });
  }
}
