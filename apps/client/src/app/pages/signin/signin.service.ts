import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRestModel, UserModel } from '@nearest-stars/schema';
import { Observable } from 'rxjs';

@Injectable()
export class SigninService {

  public constructor(
    private http: HttpClient
  ) {
  }

  doSignin(user: UserModel): Observable<BaseRestModel<any>> {
    return this.http.post<BaseRestModel<any>>('api/token', user);
  }
}
