import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import {Profile} from '../../../models/profile';

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
}
