import {Component, OnInit} from '@angular/core';
import {ProfileService} from './service/profile.service';
import {ModalController} from '@ionic/angular';
import {AddPostComponent} from './add-post/add-post.component';
import {Profile} from '../../models/profile';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    profile: Profile;
    constructor(
        private profileService: ProfileService,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
        this.profileService.getMyProfile()
            .then(response => {
                this.profile = response;
                console.log('Profil', this.profile);
            });
    }

    async popFormAddPost() {
        const modal = await this.modalController.create({
            component: AddPostComponent,
            componentProps: {profile: this.profile},
            cssClass: 'modal',
        });
        modal.onDidDismiss().then(() => {

        });
        return await modal.present();
    }
}
