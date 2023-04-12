import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class GetIngredientUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(id: string): Observable<IngredientDomainModel> {
    return this.service.findById(id);
  }
}
