import { IUseCase } from '@application/interface';
import { ICreateIngredientCommand } from '@domain/command';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class CreateIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(
    ingredient: ICreateIngredientCommand
  ): Observable<IngredientDomainModel> {
    return this.service.create(ingredient);
  }
}
