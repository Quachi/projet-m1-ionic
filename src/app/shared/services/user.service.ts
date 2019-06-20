import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginUser, User} from '../../models/user';
import {HttpService} from './http.service';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.apiUrl;
    // userSubject: Subject<User> = new Subject<User>();
    currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    constructor(public httpService: HttpService) {
    }

    static getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    getCurrentUser() {
        return this.currentUserSubject.getValue();
    }

    setUser(user: User) {
        this.currentUserSubject.next(user);
    }

    getUsersObservable(): Observable<User> {
        return this.currentUserSubject.asObservable();
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    public isLoggedIn() {
        return moment().isBefore(UserService.getExpiration());
    }


    subscribe(user: User): Promise<any> {
        return this
            .httpService
            .post(`${this.url}/profile/register`, user)
            .toPromise();
    }

    login(user: LoginUser): Promise<any> {
        return this
            .httpService.post(`${this.url}/profile/login`, user)
            .toPromise();
    }

    logout() {
        this.currentUserSubject.next(null);
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    loadUser() {
        this
            .httpService
            .get<User>(`${this.url}/profile/login`)
            .subscribe(response => {
                this.currentUserSubject.next(response);
            }, error => console.error(error));
    }
}
