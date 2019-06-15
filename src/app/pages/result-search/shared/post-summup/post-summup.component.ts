import {Component, Input, OnInit} from '@angular/core';
import Post from '../../../../models/post';

@Component({
    selector: 'app-post-summup',
    templateUrl: './post-summup.component.html',
    styleUrls: ['./post-summup.component.scss'],
})
export class PostSummupComponent implements OnInit {
    @Input() post: Post;
    timeLeft: number;
    diffDays;
    diffHours;
    constructor() {
    }

    ngOnInit() {
        this.timeLeft = Math.abs(this.post.dateEvent - new Date().getTime());
        this.diffDays = Math.ceil(this.timeLeft / (24 * 60 * 60 * 1000));
        this.diffHours = Math.ceil(this.timeLeft / (60 * 60 * 1000));
        console.log(this.diffDays);
        console.log(this.diffHours);
    }
}
