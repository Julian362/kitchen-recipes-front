import { IUseCase } from '@application/interface';
import { ICreateRecipeCommand } from '@domain/command';
import { RecipeDomainModel } from '@domain/models';
import { IRecipeService } from '@domain/services';
import { Observable } from 'rxjs';

export class CreateRecipeUseCase implements IUseCase {
  constructor(private readonly service: IRecipeService) {}

  execute(recipe: ICreateRecipeCommand): Observable<RecipeDomainModel> {
    return this.service.create(recipe as RecipeDomainModel);
  }
}
