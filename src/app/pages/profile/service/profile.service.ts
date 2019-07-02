import {Injectable} from '@angular/core';
import {HttpService} from '../../../shared/services/http.service';
import {UserService} from '../../../shared/services/user.service';
import {Profile} from '../../../models/profile';
import {Type} from '../../../models/type';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    // private profile: Profile;

    constructor(private httpService: HttpService, private userService: UserService) {
        this.userService.isReady().then(() => {
            this.httpService.get<Profile>('/profile/me')
                .then(data => console.log('PROFILE OK', data))
                .catch(err => console.error('PROFILE ERROR', err));
        });
    }

    getMyProfile(): Promise<Profile> {
        return this.httpService.get<Profile>(`/profile/me`);
    }

    getProfileById(id: string): Promise<Profile> {
        return this.httpService
            .get<Profile>(`/profile/${id}`);
    }

    getTypeById(id: string): Promise<Type> {
        return this.httpService
            .get<Type>(`/type/${id}`);
    }

    getArrayType(typesId: Array<string>): Promise<Array<Type>> {
        return new Promise((resolve) => {
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
