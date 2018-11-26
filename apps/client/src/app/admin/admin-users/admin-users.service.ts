import { Injectable } from '@angular/core';
import { UserModel } from '@nearest-stars/data-models';
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

  fetchUserList() {
    return this.restServ.doGet<UserModel[]>('api/user', true).pipe(
      tap((res) => {
        this.users = res.data;
      })
    )
  }

  getUserList() {
    return this.users.slice();
  }

  getUserByIndex(i: number): UserModel | null {
    if (this.users.length > 0) {
      return this.users.slice(i, 1)[0];
    } else {
      return null;
    }
  }
}