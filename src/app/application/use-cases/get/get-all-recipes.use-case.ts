import { IUseCase } from '@application/interface';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

export class GetAllRecipesUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  execute(id: string): Observable<RecipeDomainModel[]> {
    return this.service.findAllByUserId(id);
  }
}
