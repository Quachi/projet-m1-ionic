import {Component, OnInit} from '@angular/core';
import {PostService} from '../../post/service/post.service';
import {Type} from '../../../models/type';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
    types: Array<Type>;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getAllType()
            .then(response => {
                this.types = response;
                console.log(this.types);
            });
    }

    handleLastNameValue(event) {
        console.log(event);
    }
}
