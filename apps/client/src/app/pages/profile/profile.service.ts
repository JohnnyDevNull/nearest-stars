import { Injectable } from '@angular/core';
import { BaseRestModel, UserModel, UserProfileModel } from '@nearest-stars/data-models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MsglineService } from '../../comps/msgline/msgline.service';
import { RestService } from '../../services/rest/rest.service';
import { StateService } from '../../services/state/state-service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public user: UserModel | null = null;
  public profile: UserProfileModel | null = null;

  public constructor(
    private rest: RestService,
    private state: StateService,
    private msgline: MsglineService
  ) {
  }

  public load(): Observable<BaseRestModel<UserModel>> {
    return this.rest.doGet<UserModel>('/api/user/' + this.state.getUserId()).pipe(tap((res) => {
      this.user = res.data;
    }));
  }
}
