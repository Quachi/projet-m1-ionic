import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router,private userService: UserService) {}

    private isLogged: boolean = false

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        await this.userService.isReady().then(() => {
            this.userService.check()
            .then(()  => this.isLogged = true)
            .catch(() => this.isLogged = false)
        })
        if(this.isLogged) { return true }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).catch(error => console.error(error))
        return false
    }
}
