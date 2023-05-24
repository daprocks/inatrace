import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const res = await this.authService.userProfile$.pipe(take(1)).toPromise();
    if (res && 'SYSTEM_ADMIN' === res.role) { return true; }
    else { this.router.navigate(['/', 'home']); }

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }

}
