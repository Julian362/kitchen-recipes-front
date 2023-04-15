import { Pipe, PipeTransform } from '@angular/core';
import { Delegate } from '@application/delegate';
import { IngredientModel } from '@infrastructure/models/ingredient.model';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'ingredient',
})
export class IngredientPipe implements PipeTransform {
  constructor(private readonly delegate: Delegate) {}

  transform(ingredientId: string): Observable<string> {
    this.delegate.toGetIngredient();
    return this.delegate.execute<IngredientModel>(ingredientId).pipe(
      map((res) => {
        const ingredient = res;
        return ingredient.name;
      })
    );
  }
}
