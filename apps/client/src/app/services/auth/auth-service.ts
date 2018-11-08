import { Injectable } from '@angular/core';
import { StateService } from '../state/state-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public constructor(
    private stateServ: StateService
  ) {
  }
}
