import { Injectable } from '@angular/core';
import { NotifyService, RestService, AppStateService } from '@client-services/index';
import { BaseRestModel, UserModel, UserProfileModel } from '@nearest-stars/schema';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public user: UserModel | null = null;
  public profile: UserProfileModel | null = null;

  public constructor(
    private rest: RestService,
    private state: AppStateService,
    private msgline: NotifyService
  ) {
  }

  public load(): Observable<BaseRestModel<UserModel>> {
    return this.rest.doGet<UserModel>('/api/auth/user/' + this.state.getUserId()).pipe(tap((res) => {
      this.user = res.data;
    }));
  }
}
