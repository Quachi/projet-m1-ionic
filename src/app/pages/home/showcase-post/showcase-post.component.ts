import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from "../../../shared/services/http.service"
import { Post } from "../../../models/post"


@Component({
    selector: 'app-showcase-post',
    templateUrl: './showcase-post.component.html',
    styleUrls: ['./showcase-post.component.scss'],
})
export class ShowcasePostComponent implements OnInit {
    slideOpts = {
        slidesPerView: 2,
        spaceBetween: 0,
        freeMode: true,
    };
    @Input() title
    @Input() description
    @Input() query
    @Input() posts: Array<Post>

    constructor(private router: Router, private HttpService: HttpService) {}

    ngOnInit() {
        const url = `http://localhost:8080/post/search?${this.query}`
        this.HttpService.get(url).subscribe((data: [Post]) => {
         this.posts = data   
        }, err => console.error(err))
    }

    showMore = () => this.router.navigate(['/result-search']).catch(error => console.error(error))
}
