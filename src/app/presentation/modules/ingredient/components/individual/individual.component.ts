import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ingredient-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
})
export class IndividualIngredientComponent {
  constructor(private route: ActivatedRoute) {}
  ingredient = this.route.snapshot.paramMap.get('id');
}
