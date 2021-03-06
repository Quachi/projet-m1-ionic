import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../models/profile';
import {Post} from '../../../models/post';

@Component({
    selector: 'app-post-header',
    templateUrl: './post-header.component.html',
    styleUrls: ['./post-header.component.scss'],
})
export class PostHeaderComponent implements OnInit {
    @Input() hostProfile: Profile;
    @Input() post: Post;
    constructor() {
    }

    ngOnInit() {
    }

}
