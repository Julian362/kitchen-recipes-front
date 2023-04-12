import { IUseCase } from '@application/interface';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

export class GetRecipeUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  execute(_id: string): Observable<RecipeDomainModel> {
    return this.service.findById(_id);
  }
}
