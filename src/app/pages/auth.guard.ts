import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private userService: UserService) {
    }

    private isLogged = false;

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const promise = new Promise((resolve) => {
            this.userService.isReady().then(() => {
                this.userService.check()
                    .then((gotToken) => resolve(gotToken));
            });
        });
        return promise.then((resultChecking) => {
            if (resultChecking) {
                return true;
            } else {
                this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
                    .catch(error => console.error(error));
                return false;
            }
        });


    }
}
