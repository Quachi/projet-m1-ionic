import {Component, OnInit} from '@angular/core';
import {ProfileService} from './service/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(private profileService: ProfileService) {
    }

    ngOnInit() {
        this.profileService.getMyProfile()
            .then(response => {
                console.log(response);
            });
    }

}
