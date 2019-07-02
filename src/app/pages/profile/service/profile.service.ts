import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import { UserService } from "../../../shared/services/user.service"
import {Profile} from '../../../models/profile';
import {Type} from '../../../models/type';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    apiUrl = environment.apiUrl;
    private profile: Profile

    constructor(private httpService: HttpService, private userService: UserService) {
        console.log("Constructor view profile")
        this.userService.isReady().then(() => {
            this.httpService.get<Profile>("/profile/me")
                .then(data => console.log("PROFILE OK", data))
                .catch(err => console.error("PROFILE ERROR", err))
        })

    getMyProfile(): Promise<Profile> {
        return this.httpService.get<Profile>(`${this.apiUrl}/profile/me`)
            .toPromise();
    }

    getProfileById(id: string): Promise<Profile> {
        return this.httpService
            .get<Profile>(`${this.apiUrl}/profile/${id}`)
            .toPromise();
    }

    getTypeById(id: string): Promise<Type> {
        return this.httpService
            .get<Type>(`${this.apiUrl}/type/${id}`)
            .toPromise();
    }

    getArrayType(typesId: Array<string>): Promise<Array<Type>> {
        return new Promise((resolve, reject) => {
            const types: Array<Type> = [];
            typesId.forEach(type => {
                this.getTypeById(type).then((res) => {
                    types.push(res);
                });
            });
            resolve(types);
        });
    }
}
