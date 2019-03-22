import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AppStateService } from '@client-services/state/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  public constructor(
    private appState: AppStateService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.appState.getToken();
    const canActivate = typeof token === 'string' && token.length > 0;
    if (canActivate) {
      return true;
    } else {
      this.router.navigate(['/signin'])
        .then(() => console.warn('not authorized; redirected to /signin'))
        .catch((e) =>  console.error(e));
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.canActivate(childRoute, state);
  }

}
