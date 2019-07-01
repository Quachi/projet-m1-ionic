import { Injectable } from "@angular/core"
import {Storage} from '@ionic/storage'
import {BehaviorSubject} from 'rxjs';
import { Token } from "../../models/user"

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private user: BehaviorSubject<Token> = new BehaviorSubject<Token>({token: undefined, expiresIn: undefined})
    
    constructor(private storage: Storage) {
        this.storage.get("user").then((data: Token) => this.user.next(data))
    }

    check = () => {
        const {token, expiresIn} = this.user.getValue()
        return (token && Date.now() < expiresIn) ? true : false
    }

    getUser = () => this.user.getValue()
    setUser= (data: Token) => this.storage.set("user", data).then((data: Token) => this.user.next(data))
}


// export class UserService {
//     url = environment.apiUrl;
//     currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

//     constructor(public httpService: HttpService, private storage: Storage) {
//     }


//     setOne = (key, value) => this.storage.set(key, value)

//     getOne = key => this.storage.get(key)




//     static getExpiration() {
//         const expiration = localStorage.getItem('expires_at');
//         const expiresAt = JSON.parse(expiration);
//         return moment(expiresAt);
//     }

//     getCurrentUser() {
//         return this.currentUserSubject.getValue();
//     }

//     setUser(user: User) {
//         this.currentUserSubject.next(user);
//     }

//     getUsersObservable(): Observable<User> {
//         return this.currentUserSubject.asObservable();
//     }

//     private setSession(authResult) {
//         const expiresAt = moment().add(authResult.expiresIn, 'second');

//         localStorage.setItem('id_token', authResult.idToken);
//         localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
//     }

//     public isLoggedIn() {
//         return moment().isBefore(UserService.getExpiration());
//     }


//     subscribe(user: User): Promise<any> {
//         return this
//             .httpService
//             .post(`${this.url}/profile/register`, user)
//             .toPromise();
//     }

//     login(user: LoginUser): Promise<any> {
//         return this
//             .httpService.post(`${this.url}/profile/login`, user)
//             .toPromise();
//     }

//     logout() {
//         this.currentUserSubject.next(null);
//         localStorage.removeItem('id_token');
//         localStorage.removeItem('expires_at');
//     }

//     loadUser() {
//         this
//             .httpService
//             .get<User>(`${this.url}/profile/login`)
//             .subscribe(response => {
//                 this.currentUserSubject.next(response);
//             }, error => console.error(error));
//     }
// }
