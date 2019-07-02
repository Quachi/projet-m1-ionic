import {Component, OnInit} from '@angular/core';
import {Profile} from '../../models/profile';
import {Post} from '../../models/post';
import {LoadingController, ModalController} from '@ionic/angular';
import {CommentaryModalComponent} from './commentary-modal/commentary-modal.component';
import {UserService} from '../../shared/services/user.service';
import {PostService} from './service/post.service';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../profile/service/profile.service';
import {Type} from '../../models/type';

@Component({
    selector: 'app-post',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
    post: Post;
    hostProfile: Profile;
    types: Array<Type>;
    isLogged: boolean;
    id: string;
    isLoaded = false;

    constructor(
        public modalController: ModalController,
        private userService: UserService,
        private postService: PostService,
        private activatedRoute: ActivatedRoute,
        private profileService: ProfileService,
        public loadingController: LoadingController
    ) {
    }

    ngOnInit() {
        // this.hostProfile = MOCK_PROFILE.find((profile) => {
        //     return profile._id === this.post.host;
        // });
        this.Loading()
            .then(() => this.isLoaded = true)
            .catch(error => console.error(error));
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.postService.getPostById(this.id)
            .then(response => {
                console.log(response);
                this.post = response;
                this.getProfile(this.post);
            });
        this.isLogged = this.userService.getCurrentUser() !== null;

    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: CommentaryModalComponent,
            componentProps: {value: 123},
            cssClass: 'modal',
        });
        return await modal.present();
    }

    async Loading() {
        const loading = await this.loadingController.create({
            duration: 1000,
            translucent: true,
            cssClass: 'custom-class custom-loading',
            spinner: 'crescent',
        });
        return await loading.present();
    }

    dismissLoader() {
        this.loadingController.dismiss()
            .catch(error => {
                console.log(error);
            });
    }

    getProfile(post: Post) {
        this.profileService.getProfileById(post.user)
            .then(res => {
                this.hostProfile = res;
            });
    }


}
