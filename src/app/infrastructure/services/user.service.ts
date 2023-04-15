import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserService } from '@domain/services/user.service';
import { UserModel } from '@infrastructure/models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService implements IUserService {
  constructor(private http: HttpClient) {}

  create(entity: UserModel): Observable<{
    data: UserModel;
    token: string;
  }> {
    return this.http.post<{
      data: UserModel;
      token: string;
    }>(`${environment.HOST}/user`, entity);
  }
  findById(id: string): Observable<{
    data: UserModel;
    token: string;
  }> {
    return this.http.get<{
      data: UserModel;
      token: string;
    }>(`${environment.HOST}/user/${id}`);
  }

  delete(id: string): Observable<UserModel> {
    return this.http.delete<UserModel>(`${environment.HOST}/user/${id}`);
  }
}
