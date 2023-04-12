import { IUseCase } from '@application/interface';
import { IUpdateRecipesCommand } from '@domain/command';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

export class UpdateRecipeUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  execute(
    _id: string,
    recipe: IUpdateRecipesCommand
  ): Observable<RecipeDomainModel> {
    return this.service.update(_id, recipe as RecipeDomainModel);
  }
}
