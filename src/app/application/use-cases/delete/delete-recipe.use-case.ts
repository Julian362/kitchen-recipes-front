import { IUseCase } from '@application/interface';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

export class DeleteRecipeUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  public execute(_id: string): Observable<RecipeDomainModel> {
    return this.service.delete(_id);
  }
}
