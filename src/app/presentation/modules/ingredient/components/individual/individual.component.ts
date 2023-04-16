import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
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
    private readonly delegate: Delegate
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.delegate.toGetIngredient();
    this.delegate.execute<IngredientModel>(this.id).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
