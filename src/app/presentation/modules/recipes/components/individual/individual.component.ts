import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Delegate } from '@application/delegate';
import { RecipesModel } from '@infrastructure/models/recipes.model';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'recipe-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
})
export class IndividualRecipeComponent {
  recipe!: RecipesModel;
  constructor(
    private readonly delegate: Delegate,
    private route: ActivatedRoute,
    private readonly swal: SwalService
  ) {}
  ngOnInit(): void {
    this.getOneById(this.route.snapshot.paramMap.get('id')!);
  }

  getOneById(id: string) {
    this.delegate.toGetRecipe();
    this.delegate.execute(id).subscribe({
      next: (res) => {
        this.recipe = res as RecipesModel;
      },
      error: (err) => {
        this.swal.toFire('Error', err.message, 'error');
      },
    });
  }
}
