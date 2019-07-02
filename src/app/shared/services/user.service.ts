import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models/user';
import {environment} from '../../../environments/environment';
import {Token} from '../../models/token';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    constructor(private storage: Storage) {
    }

    isReady = (): Promise<any> => this.storage.ready();

    check = async (): Promise<boolean> => {
        const token = await this.get();
        return new Promise<boolean>((resolve) => {
            if (token === null) {
                resolve(false);
            } else {
                (token.token && Date.now() < token.expiresIn) ? resolve(true) : resolve(false);
            }
        });
    }

    get = (): Promise<Token> => this.storage.get('token');

    set = (data: Token) => {
        data.expiresIn = Date.now() + (data.expiresIn * 1000);
        this.storage.set('token', data)
            .catch(error => console.error(error));
    }

    delete = () => this.storage.remove('token');

    /* OLD FUNCTIONS */


    // static getExpiration() {
    //     const expiration = localStorage.getItem('expires_at');
    //     const expiresAt = JSON.parse(expiration);
    //     return moment(expiresAt);
    // }

    // getCurrentUser() {
    //     return this.currentUserSubject.getValue();
    // }

    // setUser(user: User) {
    //     this.currentUserSubject.next(user);
    // }

    // getUsersObservable(): Observable<User> {
    //     return this.currentUserSubject.asObservable();
    // }

    // private setSession(authResult) {
    //     const expiresAt = moment().add(authResult.expiresIn, 'second');

    //     localStorage.setItem('id_token', authResult.idToken);
    //     localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    // }

    // public isLoggedIn() {
    //     return moment().isBefore(UserService.getExpiration());
    // }


    // subscribe(user: User): Promise<any> {
    //     return this
    //         .httpService
    //         .post(`${this.url}/profile/register`, user)
    //         .toPromise();
    // }

    // login(user: LoginUser): Promise<any> {
    //     return this
    //         .httpService.post(`${this.url}/profile/login`, user)
    //         .toPromise();
    // }

    // logout() {
    //     this.currentUserSubject.next(null);
    //     localStorage.removeItem('id_token');
    //     localStorage.removeItem('expires_at');
    // }

    // loadUser() {
    //     this
    //         .httpService
    //         .get<User>(`${this.url}/profile/login`)
    //         .subscribe(response => {
    //             this.currentUserSubject.next(response);
    //         }, error => console.error(error));
    // }
}
