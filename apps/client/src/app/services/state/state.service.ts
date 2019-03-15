import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppState {
  meta: {},
  auth: {
    user: {
      userId: number,
      userName: string,
      activated: boolean,
      locked: boolean,
    },
    token: {
      value: string,
      expiresAt: Date | null,
    }
    isLoggedIn: boolean
  }
};

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private appState: AppState = null;
  public propagation = new BehaviorSubject<'init' | 'all' | 'user-auth'>('init');

  public constructor() {
    this.init();
  }

  private init() {
    this.appState = {
      meta: {},
      auth: {
        user: {
          userId: 0,
          userName: '',
          activated: false,
          locked: false,
        },
        token: {
          value: '',
          expiresAt: null,
        },
        isLoggedIn: false
      }
    }
    this.setAuthData(null, true);
  }

  public getToken(): string {
    return this.appState.auth.token.value;
  }

  public getTokenExpire(): Date | null {
    return this.appState.auth.token.expiresAt;
  }

  public getUserId(): number {
    return this.appState.auth.user.userId;
  }

  public getUserName(): string {
    return this.appState.auth.user.userName;
  }

  public isLoggedIn(): boolean {
    return this.appState.auth.isLoggedIn;
  }

  public isUserActivated(): boolean {
    return this.appState.auth.user.activated;
  }

  public isUserLocked(): boolean {
    return this.appState.auth.user.locked;
  }

  public setAuthData(data, useLocalStorage) {
    if (data === null) {
      if (useLocalStorage) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');

        if (token !== null && username !== null && userId !== null) {
          // @todo check token before set loggedIn through API and invalidate if not
          const tokenExpire = localStorage.getItem('tokenExpire');
          const userIsActivated = localStorage.getItem('userIsActivated') === '1' ? true : false;
          const userIsLocked = localStorage.getItem('userIsLocked') === '1' ? true : false;
          this.appState.auth = {
            user: {
              userId: +userId,
              userName: username,
              activated: userIsActivated,
              locked: userIsLocked
            },
            token: {
              value: token,
              expiresAt: new Date(tokenExpire)
            },
            isLoggedIn: true
          };
        }
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('tokenExpire');
        localStorage.removeItem('userIsActivated');
        localStorage.removeItem('userIsLocked');
      }
    } else if (data.token !== undefined && data.username !== undefined) {
      this.appState.auth = {
        user: {
          userId: +data.userId,
          userName: data.username,
          activated: data.activated,
          locked: data.locked
        },
        token: {
          value: data.token,
          expiresAt: new Date(data.expiresAt)
        },
        isLoggedIn: true
      };

      if (useLocalStorage) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('tokenExpire', data.expiresAt);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userIsActivated', data.activated ? '1' : '0');
        localStorage.setItem('userIsLocked', data.locked ? '1' : '0');
      }
    }
  }

  public resetAuthData(prop: boolean = false) {
    this.appState.auth = {
      user: {
        userId: 0,
        userName: '',
        activated: false,
        locked: false
      },
      token: {
        value: '',
        expiresAt: null
      },
      isLoggedIn: false
    };
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('tokenExpire');
    localStorage.removeItem('userIsActivated');
    localStorage.removeItem('userIsLocked');
    if (prop) {
      this.propagation.next('user-auth');
    }
  }
}
