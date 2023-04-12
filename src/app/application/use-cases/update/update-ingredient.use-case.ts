import { IUseCase } from '@application/interface';
import { IUpdateIngredientCommand } from '@domain/command';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class UpdateIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(
    id: string,
    ingredient: IUpdateIngredientCommand
  ): Observable<IngredientDomainModel> {
    return this.service.update(id, ingredient as IngredientDomainModel);
  }
}
