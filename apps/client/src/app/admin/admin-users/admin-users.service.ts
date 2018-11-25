import { Injectable } from '@angular/core';
import { UserModel } from '@nearest-stars/data-models';
import { RestService } from '../../services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  public constructor (
    private restServ: RestService
  ) {
  }

  getUserList() {
    return this.restServ.doGet<UserModel[]>('api/user', true);
  }

}
