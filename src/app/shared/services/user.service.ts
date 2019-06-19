import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginUser, User} from '../../models/user';
import {HttpService} from './http.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.apiUrl;
    // userSubject: Subject<User> = new Subject<User>();
    currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    constructor(public httpService: HttpService) {
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
