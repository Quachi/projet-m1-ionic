import {Component, OnInit} from '@angular/core';
import {ProfileService} from './service/profile.service';
import {ModalController} from '@ionic/angular';
import {AddPostComponent} from './add-post/add-post.component';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(
        private profileService: ProfileService,
        public modalController: ModalController
    ) {
    }

    ngOnInit() {
        // this.profileService.getMyProfile()
        //     .then(response => {
        //         console.log(response);
        //     });
    }

    async popFormAddPost() {
        const modal = await this.modalController.create({
            component: AddPostComponent,
            componentProps: {value: 123},
            cssClass: 'modal',
        });
        return await modal.present();
    }

}
