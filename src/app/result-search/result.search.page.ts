import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './result.search.page.html',
    styleUrls: ['./result.search.page.scss'],
})
export class ResultSearchPage implements OnInit {
    slideOpts = {
        slidesPerView: 3.5,
        spaceBetween: 5,
        freeMode: true,
    };

    constructor() {
    }
    ngOnInit() {
    }

}
