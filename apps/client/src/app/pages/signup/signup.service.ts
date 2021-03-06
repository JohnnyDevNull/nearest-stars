import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRestModel, UserModel } from '@nearest-stars/schema';
import { Observable } from 'rxjs';

@Injectable()
export class SignupService {
  public constructor(
    private http: HttpClient
  ) {
  }

  doSignup(user: UserModel): Observable<BaseRestModel<any>> {
    return this.http.post<BaseRestModel<any>>('api/auth/user', user);
  }
}
