import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import {Profile} from '../../../models/profile';
import {Type} from '../../../models/type';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private apiUrl = environment.apiUrl;

    constructor(private httpService: HttpService) {
    }

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
