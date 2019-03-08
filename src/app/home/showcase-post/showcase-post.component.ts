import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

    constructor(private route: Router) {
    }

    ngOnInit() {
    }

    showMore() {
        this.route.navigate(['/result-search'])
            .catch(error => {
                console.log(error);
            });
    }
}
