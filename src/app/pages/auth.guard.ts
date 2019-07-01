import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private UserService: UserService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.UserService.check()) {
            // authorised so return true
            return true;
        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
            .catch(error => {
                console.error(error);
            });
        return false;
    }
}
