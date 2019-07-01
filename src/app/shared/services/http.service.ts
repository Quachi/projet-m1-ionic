import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import { UserService } from "./user.service"

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    token: string = null;
    private server: string = "http://localhost:8080"

    constructor(
        private http: HttpClient,
        private storage: Storage,
        private userService: UserService) {}

    get<T>(url: string): Observable<T> {
        const options = {headers: this.buildToken()};
        console.log(this.token);
        return this.http.get<T>(url, options);
    }

    post<T>(url: string, data={}, type="application/json"): Observable<T> {
        const headers = new HttpHeaders()
        headers.append("Content-Type", type)
        if(url != "/profile/login" && this.userService.check())
            headers.append("Authorization", `bearer ${this.userService.get().token}`)
        if(headers.keys.length == 2 && Date.now() >= this.userService.get().expiresIn) { return }
        return this.http.post<T>(`${this.server}${url}`, data, {headers: headers});
    }

    put<T>(url: string, data={}, type="application/json"): Observable<T> {
        const headers = new HttpHeaders()
        headers.append("Content-Type", type)
        headers.append("Authorization", `bearer ${this.userService.get().token}`)
        if(Date.now() >= this.userService.get().expiresIn) { return }
        return this.http.post<T>(`${this.server}${url}`, data, {headers: headers});
    }



    /* OLD FUNCTIONS */


    setToken(token: string) {
        this.token = token;
        this.storage.set('token', token);
    }

    buildToken() {
        const headers = {};
        if (this.token !== null) {
            headers['Authorization'] = `bearer ${this.token}`;
        }
        return new HttpHeaders(headers);
    }
}
