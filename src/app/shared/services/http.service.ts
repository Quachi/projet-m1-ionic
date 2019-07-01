import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from "../services/user.service"
// import { HEADER_OFFSET } from '@angular/core/src/render3/interfaces/view';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private http: HttpClient,
        private UserService: UserService
        ) {}

    private server: string = "http://localhost:8080"

    get<T>(url: string): Observable<T> {
        let headers = new HttpHeaders()
        if(this.UserService.getToken())
            headers.append("Authorization", `bearer ${this.UserService.getToken()}`)
            if(headers.keys.length == 2 && Date.now() >= this.UserService.getExpiration()) { return }
        return this.http.get<T>(`${this.server}${url}`, {headers: headers})
    }


    post<T>(url: string, data: object = {}, type: string = "application/json"): Observable<T> {
        let headers = new HttpHeaders()
        headers.append("Content-Type", type)
        if(url != "/profile/login" && this.UserService.getToken())
            headers.append("Authorization", `bearer ${this.UserService.getToken()}`)
        else if(headers.keys.length == 2 && Date.now() >= this.UserService.getExpiration()) { return }
        return this.http.post<T>(`${this.server}${url}`, data, {headers: headers})
    }

    put<T>(url: string, data: object = {}, type: string = "application/json"): Observable<T> {
        let headers = new HttpHeaders()
        headers.append("Content-Type", type)
        if(this.UserService.getToken())
            headers.append("Authorization", `bearer ${this.UserService.getToken()}`)
        else if(headers.keys.length == 2 && Date.now() >= this.UserService.getExpiration()) { return }
        return this.http.post<T>(`${this.server}${url}`, data, {headers: headers})
    }

    // get<T>(url: string): Observable<T> {
    //     const options = {headers: this.buildToken()};
    //     console.log(this.token);
    //     return this.http.get<T>(url, options);
    // }

    // post<T>(url: string, data: any): Observable<T> {
    //     const option = {headers: this.buildToken()};
    //     return this.http.post<T>(url, data, option);
    // }

    // setToken(token: string) {
    //     this.token = token;
    //     this.storage.set('token', token);
    // }

    // buildToken() {
    //     const headers = {};
    //     if (this.token !== null) {
    //         headers['Authorization'] = `bearer ${this.token}`;
    //     }
    //     return new HttpHeaders(headers);
    // }
}
