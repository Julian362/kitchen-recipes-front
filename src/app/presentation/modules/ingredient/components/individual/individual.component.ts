import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
})
export class IndividualComponent implements OnInit {
  ingredient!: IngredientModel;

  constructor(
    private readonly delegate: Delegate,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getOneById(this.route.snapshot.paramMap.get('id')!);
  }

  getOneById(id: string) {
    this.delegate.toGetIngredient();
    this.delegate.execute(id).subscribe({
      next: (res) => {
        this.ingredient = res as IngredientModel;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
