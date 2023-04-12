import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserService } from '@domain/services/user.service';
import { UserModel } from '@infrastructure/models/user.model';
import { environment } from '@infrastructure/utils/env/host';
import { Observable } from 'rxjs';

@Injectable()
export class UserMService implements IUserService {
  constructor(private http: HttpClient) {}

  create(entity: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.HOST}/user`, entity);
  }
  findById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.HOST}/user/${id}`);
  }

  delete(id: string): Observable<UserModel> {
    return this.http.delete<UserModel>(`${environment.HOST}/user/${id}`);
  }
}
