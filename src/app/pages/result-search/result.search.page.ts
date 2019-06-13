import {Component, OnInit} from '@angular/core';
import MOCK_POST from '../../shared/MOCK_POST';

@Component({
    selector: 'app-search',
    templateUrl: './result.search.page.html',
    styleUrls: ['./result.search.page.scss'],
})
export class ResultSearchPage implements OnInit {
    posts = MOCK_POST;
    slideOpts = {
        slidesPerView: 3.5,
        spaceBetween: 5,
        freeMode: true,
    };

    constructor() {
    }
    ngOnInit() {
        console.log(this.posts);
    }

}
