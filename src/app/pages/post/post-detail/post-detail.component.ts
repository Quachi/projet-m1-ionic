import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../models/profile';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  @Input() hostProfile: Profile;
  @Input() post: Post;
  constructor() { }

  ngOnInit() {}

}
