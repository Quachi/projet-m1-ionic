import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginUser, User} from '../../models/user';
// import {HttpService} from './http.service';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';
import { Token } from "../../models/token"
import { Storage } from "@ionic/storage"

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = environment.apiUrl;

    currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    private token: BehaviorSubject<Token> = new BehaviorSubject<Token>({token: undefined, expiresIn: undefined})

    constructor(private storage: Storage) {
        this.storage.get("token").then((data) => this.token.next(data))
    }

    get = () => this.token.getValue()

    set = (data: Token) => {
        data.expiresIn = Date.now() + (data.expiresIn * 1000)
        this.storage.set("token", data).then((data: Token) => this.token.next(data))
    }

    check = () => {
        const {token, expiresIn} = this.token.getValue()
        return (token && Date.now() < expiresIn) ? true : false
    }

    delete = () => {
        this.storage.remove("token").then()
    }
    test(item: string): Promise<any> { return this.storage.get(item)}

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
