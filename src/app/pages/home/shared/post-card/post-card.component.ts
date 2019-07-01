import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from "../../../../shared/services/http.service"
import {Post} from '../../../../models/post';


@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
    @Input() post: Post;
    diffDays: number
    media: string = ""

    constructor(private router: Router, private HttpService: HttpService) {}

    ngOnInit() {
        const timeLeft = Math.abs(this.post.timestamp - new Date().getTime());
        this.diffDays = Math.ceil(timeLeft / (24 * 60 * 60 * 1000))
        this.media = this.post.medias[0] ? this.post.medias[0] : "https://via.placeholder.com/1280x720?text=No+picture+yet"
    }

    clickCard() {
        console.log("Event click", "single post")
        this.router.navigate(["/post"]).catch(err => console.error(err))
    }
}
