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
  private userId: number | null = null;
  private username: string | null;
  private userIsActivated = false;
  private userIsLocked = false;

  public loginSubj = new Subject<TokenResponseModel>();
  public logoutSubj = new Subject<any>();

  public constructor() {
    this.setAuthData(null, true);

    this.loginSubj.subscribe(
      (data) => {
        this.setAuthData(data, data.useLocalStorage ? true : false);
      }
    )

    this.logoutSubj.subscribe(
      () => {
        this.setAuthData(null);
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

  public getUserId(): number | null {
    return this.userId;
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

  private setAuthData(data, useLocalStorage = false) {
    if (data === null) {
      if (useLocalStorage) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        if (token !== null && username !== null && userId !== null) {
          this.token = token;
          this.userId = +userId;
          this.username = username;
          const tokenExpire = localStorage.getItem('tokenExpire');
          this.tokenExpire = new Date(tokenExpire);
          const userIsActivated = localStorage.getItem('userIsActivated') === '1' ? true : false;
          this.userIsActivated = userIsActivated;
          const userIsLocked = localStorage.getItem('userIsLocked') === '1' ? true : false;
          this.userIsLocked = userIsLocked;
          this.isLoggedIn = true;
        }
      } else {
        this.token = null;
        this.isLoggedIn = false;
        this.tokenExpire = null;
        this.userId = null;
        this.username = null;
        this.userIsActivated = false;
        this.userIsLocked = false;
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpire');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('userIsActivated');
        localStorage.removeItem('userIsLocked');
      }
    } else if (
      data.token !== undefined
      && data.username !== undefined
    ) {
      this.token = data.token;
      this.tokenExpire = new Date(data.expiresAt);
      this.userId = data.userId;
      this.username = data.username;
      this.userIsActivated = data.activated;
      this.userIsLocked = data.locked;
      this.isLoggedIn = true;
      if (useLocalStorage) {
        localStorage.setItem('token', this.token);
        localStorage.setItem('tokenExpire', data.expiresAt);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userIsActivated', data.activated ? '1' : '0');
        localStorage.setItem('userIsLocked', data.locked ? '1' : '0');
      }
    }
  }
}
