import { Injectable } from '@angular/core';
import { BaseRestModel, UserModel } from '@nearest-stars/schema';
import { tap } from 'rxjs/operators';
import { RestService } from '../../services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  private users: UserModel[] = [];

  public constructor (
    private restServ: RestService
  ) {
  }

  public fetchUserList() {
    return this.restServ.doGet<UserModel[]>('api/auth/user', true).pipe(
      tap((res) => {
        this.users = res.data;
      })
    )
  }

  public getUserList(): UserModel[] {
    return this.users.slice();
  }

  public getUserByIndex(i: number): UserModel | null {
    if (this.users.length > 0) {
      return this.users.slice(i, i+1)[0];
    } else {
      return null;
    }
  }

  public updateUser(user: UserModel) {
    return this.restServ.doPut<BaseRestModel<UserModel>>('api/auth/user/' + user.id, user, true);
  }

  public createUser(user: UserModel) {
    return this.restServ.doPost<BaseRestModel<UserModel>>('api/auth/user', user, true);
  }

  public deleteUser(userId: number) {
    return this.restServ.doDelete<BaseRestModel<any>>('api/auth/user/' + userId, true);
  }
}
