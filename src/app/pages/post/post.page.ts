import {Component, OnInit} from '@angular/core';
import MOCK_POST from '../../shared/MOCK/MOCK_POST';
import MOCK_PROFILE from '../../shared/MOCK/MOCK_PROFILE';
import {Profile} from '../../models/profile';
import {Post} from '../../models/post';
import {ModalController} from '@ionic/angular';
import {CommentaryModalComponent} from './commentary-modal/commentary-modal.component';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../models/user';

@Component({
    selector: 'app-post',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
    post: Post = MOCK_POST[0];
    hostProfile: Profile;
    isLogged: boolean;

    constructor(public modalController: ModalController, private userService: UserService) {
    }

    ngOnInit() {
        this.hostProfile = MOCK_PROFILE.find((profile) => {
            return profile._id === this.post.host;
        });
        // this.isLogged = this.userService.getCurrentUser() !== null;
        this.isLogged = this.userService.check()

    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: CommentaryModalComponent,
            componentProps: {value: 123},
            cssClass: 'modal'
        });
        return await modal.present();
    }


}
