import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

    constructor(private route: Router) {
    }

    ngOnInit() {
    }

    clickCard() {
        this.route.navigate(['/post'])
            .catch(error => {
                console.log(error);
            });
    }
}
