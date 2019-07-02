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
        return await this.userService.isReady().then(() => {
            this.userService.check()
                .then((gotToken) => console.log('gotToken', gotToken));
        })
            .then(() => {
                if (this.isLogged) {
                    console.log('can activate', true);
                    return true;
                } else {
                    console.log('can activate', false);
                    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).catch(error => console.error(error));
                    return false;
                }
            });


    }
}
