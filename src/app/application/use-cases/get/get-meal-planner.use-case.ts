import { IUseCase } from '@application/interface';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService } from '@domain/services';
import { Observable } from 'rxjs';

export class GetMealPlannerUseCase implements IUseCase {
  constructor(private readonly service: IMealPlannerService) {}

  execute(id: string): Observable<MealPlannerDomainModel> {
    return this.service.findById(id);
  }
}
