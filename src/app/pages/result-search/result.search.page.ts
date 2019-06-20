import {Component, OnInit} from '@angular/core';
import MOCK_POST from '../../shared/MOCK/MOCK_POST';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './result.search.page.html',
    styleUrls: ['./result.search.page.scss'],
})
export class ResultSearchPage implements OnInit {
    posts = MOCK_POST;
    tags: Array<string> = ['tags1', 'tags2'];
    slideOpts = {
        slidesPerView: 1,
        spaceBetween: 5,
        freeMode: true,
    };

    // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 54 };

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    detailPost(idPost: string) {
        console.log(idPost);
        this.router.navigate([`/post/${idPost}`])
            .catch(error => console.error(error));
    }

}
