import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../../../models/post';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
    @Input() post: Post;
    diffDays;
    constructor(private route: Router) {
    }

    ngOnInit() {
        const timeLeft = Math.abs(this.post.dateEvent - new Date().getTime());
        this.diffDays = Math.ceil(timeLeft / (24 * 60 * 60 * 1000));
    }

    clickCard() {
        this.route.navigate(['/post'])
            .catch(error => {
                console.error(error);
            });
    }
}
