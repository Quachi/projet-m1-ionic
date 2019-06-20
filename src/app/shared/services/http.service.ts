import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    token: string = null;

    constructor(public http: HttpClient, public storage: Storage) {
    }

    get<T>(url: string): Observable<T> {
        const options = {headers: this.buildToken()};
        console.log(this.token);
        return this.http.get<T>(url, options);
    }

    post<T>(url: string, data: any): Observable<T> {
        const option = {headers: this.buildToken()};
        return this.http.post<T>(url, data, option);
    }

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
