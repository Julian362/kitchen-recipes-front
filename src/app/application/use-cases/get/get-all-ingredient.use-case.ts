import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class GetAllIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(): Observable<IngredientDomainModel[]> {
    return this.service.findAll();
  }
}
