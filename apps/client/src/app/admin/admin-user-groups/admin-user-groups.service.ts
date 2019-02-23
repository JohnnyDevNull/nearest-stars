import { Injectable } from '@angular/core';
import { UserGroupModel } from '@nearest-stars/schema';
import { tap } from 'rxjs/operators';
import { RestService } from '../../services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserGroupsService {

  private userGroups: UserGroupModel[] = [];

  public constructor (
    private restServ: RestService
  ) {
  }

  public fetchUserGroupList() {
    return this.restServ.doGet<UserGroupModel[]>('api/usergroup', true).pipe(
      tap((res) => {
        this.userGroups = res.data;
      })
    )
  }

  public getUserGroupList(): UserGroupModel[] {
    return this.userGroups.slice();
  }

  public getUserGroupByIndex(i: number): UserGroupModel | null {
    if (this.userGroups.length > 0) {
      return this.userGroups.slice(i, i+1)[0];
    } else {
      return null;
    }
  }

  public updateUserGroup(userGroup: UserGroupModel) {
    return this.restServ.doPut<UserGroupModel>('api/usergroup/' + userGroup.id, userGroup, true);
  }

  public createUserGroup(userGroup: UserGroupModel) {
    return this.restServ.doPost<UserGroupModel>('api/usergroup', userGroup, true);
  }

  public deleteUserGroup(groupdId: number) {
    return this.restServ.doDelete<any>('api/usergroup/' + groupdId, true);
  }
}
