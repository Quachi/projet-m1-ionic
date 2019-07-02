import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import MOCK_POST from '../../../shared/MOCK/MOCK_POST';
import {Post} from '../../../models/post';
import {PostService} from '../../post/service/post.service';

@Component({
    selector: 'app-showcase-post',
    templateUrl: './showcase-post.component.html',
    styleUrls: ['./showcase-post.component.scss'],
})
export class ShowcasePostComponent implements OnInit {
    slideOpts = {
        slidesPerView: 2,
        spaceBetween: 0,
        freeMode: true,
    };
    @Input() title = 'Les plus populaires';
    @Input() description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit dui, gravida quis interdum nec, ornare\n' +
        '        euismod quam.';
    @Input() posts: Array<Post>;

    constructor(private route: Router, private postService: PostService) {
    }

    ngOnInit() {
        this.postService.searchPost('all', 'all')
            .then(response => {
                this.posts = response;
            });
    }

    showMore() {
        this.route.navigate(['/result-search'])
            .catch(error => {
                console.error(error);
            });
    }

    redirect(id: string) {
        this.route.navigate(['/post/' + id])
            .catch(error => {
                console.error(error);
            });
    }
}
