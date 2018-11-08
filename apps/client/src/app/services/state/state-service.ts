import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private token: string;
  private isLoggedIn: boolean;
  private tokenExpire: Date;

  public loginSubj: Subject<any>;
  public logoutSubj: Subject<any>;
  public resetAuthSubj: Subject<any>;
  public resetStateSubj: Subject<any>;
  public errorSubj: Subject<any>;

  public getToken(): string {
    return this.token;
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public getTokenExpire(): Date {
    return this.tokenExpire;
  }
}
