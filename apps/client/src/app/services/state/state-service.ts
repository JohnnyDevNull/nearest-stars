import { Injectable } from '@angular/core';
import { TokenResponseModel } from '@nearest-stars/data-models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private token: string | null = null;
  private isLoggedIn = false;
  private tokenExpire: Date | null = null;
  private username: string | null;
  private userIsActivated = false;
  private userIsLocked = false;

  public loginSubj = new Subject<TokenResponseModel>();
  public logoutSubj = new Subject<any>();

  public constructor() {
    this.loginSubj.subscribe(
      (data) => {
        this.token = data.token;
        this.tokenExpire = new Date(data.expiresAt);
        this.isLoggedIn = true;
        this.username = data.username;
        this.userIsActivated = data.activated;
        this.userIsLocked = data.locked;
      }
    )

    this.logoutSubj.subscribe(
      () => {
        this.token = null;
        this.isLoggedIn = false;
        this.tokenExpire = null;
        this.username = null;
        this.userIsActivated = false;
        this.userIsLocked = false;
      }
    );
  }

  public getToken(): string | null {
    return this.token;
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public getTokenExpire(): Date | null {
    return this.tokenExpire;
  }

  public getUsername(): string | null {
    return this.username;
  }

  public getUserIsActivated(): boolean {
    return this.userIsActivated;
  }

  public getUserIsLocked(): boolean {
    return this.userIsLocked;
  }
}
