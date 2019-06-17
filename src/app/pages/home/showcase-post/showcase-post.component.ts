import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import MOCK_POST from '../../../shared/MOCK_POST';
import {Post} from '../../../models/post';

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
    @Input() posts: Array<Post> = MOCK_POST;

    constructor(private route: Router) {
    }

    ngOnInit() {
    }

    showMore() {
        this.route.navigate(['/result-search'])
            .catch(error => {
                console.error(error);
            });
    }
}
