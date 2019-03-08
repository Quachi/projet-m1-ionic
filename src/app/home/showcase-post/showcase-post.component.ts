import {Component, OnInit} from '@angular/core';

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

    constructor() {
    }

    ngOnInit() {
    }

}
