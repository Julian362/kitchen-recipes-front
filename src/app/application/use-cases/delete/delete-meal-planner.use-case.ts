import { IUseCase } from '@application/interface';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService } from '@domain/services';
import { Observable } from 'rxjs';

export class DeleteMealPlannerUseCase implements IUseCase {
  constructor(private readonly service: IMealPlannerService) {}

  execute(_id: string): Observable<MealPlannerDomainModel> {
    return this.service.delete(_id);
  }
}
