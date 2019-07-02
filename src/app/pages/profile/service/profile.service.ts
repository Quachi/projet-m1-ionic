import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import { UserService } from "../../../shared/services/user.service"
import {Profile} from '../../../models/profile';


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
    }
}
