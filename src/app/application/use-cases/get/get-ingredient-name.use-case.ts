import { IUseCase } from '@application/interface';
import { IngredientDomainModel } from '@domain/models';
import { IIngredientService } from '@domain/services';
import { Observable } from 'rxjs';

export class GetIngredientByNameUseCase implements IUseCase {
  constructor(private readonly service: IIngredientService) {}

  execute(nam: string): Observable<IngredientDomainModel> {
    return this.service.findByName(nam);
  }
}
