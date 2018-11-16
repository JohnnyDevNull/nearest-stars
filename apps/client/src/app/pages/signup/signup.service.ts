import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '@nearest-stars/data-models';
import { Observable } from 'rxjs';
import { BaseRestModel } from '../../../../../../libs/data-models/src/lib/base-rest.model';

@Injectable()
export class SignupService {
  public constructor(
    private http: HttpClient
  ) {
  }

  doSignup(user: UserModel): Observable<BaseRestModel<any>> {
    return this.http.post<BaseRestModel<any>>('api/signup', user);
  }
}
