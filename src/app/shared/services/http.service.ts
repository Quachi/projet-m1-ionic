import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Storage} from '@ionic/storage'
import { UserService } from "./user.service"
import { Token } from "../../models/token"

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    token: string = null;
    private server: string = "http://localhost:8080"

    constructor(
        private http: HttpClient,
        private storage: Storage,
        private userService: UserService
    ) {}

    async get<T>(url: string): Promise<T> {
        const headers = new HttpHeaders()
        const token: Token = await this.userService.get()
        await this.userService.check().then(() => headers.append("Authorization", `bearer ${token.token}`))
        console.log("[GET] TOKEN", token)
        console.log("[GET] HEADERS", headers)
        return this.http.get<T>(`${this.server}${url}`, {headers: headers}).toPromise()
    }

    async post<T>(url: string, data={}, type="application/json"): Promise<T> {
        const headers = new HttpHeaders()
        const token: Token = await this.userService.get()
        headers.append("Content-Type", type)
        if(url != "/profile/login") {
            await this.userService.check().then(() => headers.append("Authorization", `bearer ${token.token}`))
        }
        return this.http.post<T>(`${this.server}${url}`, data, {headers: headers}).toPromise()
    }

    async put<T>(url: string, data={}, type="application/json"): Promise<T> {
        const headers = new HttpHeaders()
        let token: Token = await this.userService.get()
        await this.userService.check().catch(() => token = undefined)
        if(!token) { return }
        headers.append("Content-Type", type)
        headers.append("Authorization", `bearer ${token.token}`)
        return this.http.post<T>(`${this.server}${url}`, data, {headers: headers}).toPromise()
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
