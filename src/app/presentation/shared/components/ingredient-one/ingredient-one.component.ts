import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'ingredient-one',
  templateUrl: './ingredient-one.component.html',
  styleUrls: ['./ingredient-one.component.scss'],
})
export class IngredientOneComponent implements OnInit {
  ingredient: IngredientModel = new IngredientModel();
  @Input() id!: string;
  constructor(
    private readonly delegate: Delegate,
    private route: ActivatedRoute,
    private readonly swal: SwalService
  ) {}
  ngOnInit(): void {
    this.getOneById(this.id);
  }

  getOneById(id: string) {
    this.delegate.toGetIngredient();
    this.delegate.execute(id).subscribe({
      next: (res) => {
        this.ingredient = res as IngredientModel;
      },
      error: (err) => {
        this.swal.toFire('Error', err.message, 'error');
      },
    });
  }
}
