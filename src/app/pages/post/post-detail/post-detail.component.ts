import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../models/profile';
import {Post} from '../../../models/post';
import {Type} from '../../../models/type';
import {ProfileService} from '../../profile/service/profile.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
    @Input() hostProfile: Profile;
    @Input() post: Post;
    types: Array<Type>;

    constructor(private profileService: ProfileService) {
    }

    ngOnInit() {
        this.getType(this.post);
    }

    getType(post: Post) {
        this.profileService.getArrayType(post.categories)
            .then(res => {
                this.types = res;
            });
    }
}
