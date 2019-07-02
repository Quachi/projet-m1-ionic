import {Component, OnInit} from '@angular/core';
import MOCK_POST from '../../shared/MOCK/MOCK_POST';
import {Router} from '@angular/router';
import {PostService} from '../post/service/post.service';
import {Post} from '../../models/post';

@Component({
    selector: 'app-search',
    templateUrl: './result.search.page.html',
    styleUrls: ['./result.search.page.scss'],
})
export class ResultSearchPage implements OnInit {
    posts: Array<Post>;
    tags: Array<string> = ['tags1', 'tags2'];
    slideOpts = {
        slidesPerView: 1,
        spaceBetween: 5,
        freeMode: true,
    };

    // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };

    constructor(private router: Router, private postService: PostService) {
    }

    ngOnInit() {
        this.postService.searchPost('all', 'all')
            .then(response => {
                this.posts = response;
            });
    }

    detailPost(idPost: string) {
        console.log(idPost);
        this.router.navigate([`/post/${idPost}`])
            .catch(error => console.error(error));
    }

}
