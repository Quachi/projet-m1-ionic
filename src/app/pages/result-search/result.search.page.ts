import {Component, OnInit} from '@angular/core';
import MOCK_POST from '../../shared/MOCK/MOCK_POST';

@Component({
    selector: 'app-search',
    templateUrl: './result.search.page.html',
    styleUrls: ['./result.search.page.scss'],
})
export class ResultSearchPage implements OnInit {
    posts = MOCK_POST;
    tags: Array<string> = ['tags1', 'tags2'] ;
    slideOpts = {
        slidesPerView: 1,
        spaceBetween: 5,
        freeMode: true,
    };
    // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };

    constructor() {
    }
    ngOnInit() {
    }

}
