import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import MOCK_POST from '../../../shared/MOCK_POST';
import Post from '../../../models/post';

@Component({
    selector: 'app-showcase-post',
    templateUrl: './showcase-post.component.html',
    styleUrls: ['./showcase-post.component.scss'],
})
export class ShowcasePostComponent implements OnInit {
    slideOpts = {
        slidesPerView: 1.3,
        spaceBetween: 30,
        freeMode: true,
    };
    title = 'Les plus populaires';
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit dui, gravida quis interdum nec, ornare\n' +
        '        euismod quam.';
    posts: Array<Post> = MOCK_POST;

    constructor(private route: Router) {
    }

    ngOnInit() {
        console.log(this.posts);
    }

    showMore() {
        this.route.navigate(['/result-search'])
            .catch(error => {
                console.log(error);
            });
    }
}
