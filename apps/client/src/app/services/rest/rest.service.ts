import { BaseRestModel } from '@nearest-stars/schema';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../state/state-service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public constructor(
    private http: HttpClient,
    private state: StateService
  ) {
  }

  public doGet<T>(path: string, needsAuth = false) {
    const httpOptions = this.httpOptions;
    if (needsAuth) {
      httpOptions.headers = httpOptions.headers.append(
        'Authorization', 'Bearer ' + this.state.getToken()
      );
    }
    return this.http.get<BaseRestModel<T>>(path, httpOptions);
  }

  public doPost<T>(path: string, options: any, needsAuth = false) {
    const httpOptions = this.httpOptions;
    if (needsAuth) {
      httpOptions.headers = httpOptions.headers.append(
        'Authorization', 'Bearer ' + this.state.getToken()
      );
    }
    return this.http.post<T>(path, options, this.httpOptions);
  }

  public doPut<T>(path: string, options: any, needsAuth = false) {
    const httpOptions = this.httpOptions;
    if (needsAuth) {
      httpOptions.headers = httpOptions.headers.append(
        'Authorization', 'Bearer ' + this.state.getToken()
      );
    }
    return this.http.put<T>(path, options);
  }

  public doDelete<T>(path: string, options: any, needsAuth = false) {
    const httpOptions = this.httpOptions;
    if (needsAuth) {
      httpOptions.headers = httpOptions.headers.append(
        'Authorization', 'Bearer ' + this.state.getToken()
      );
    }
    return this.http.delete<T>(path, options);
  }
}
