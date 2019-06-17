import { Component, OnInit } from '@angular/core';
import MOCK_POST from '../../shared/MOCK_POST';
import MOCK_PROFILE from '../../shared/MOCK_PROFILE';
import Profile from '../../models/profile';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: Post = MOCK_POST[0];
  hostProfile: Profile;
  constructor() { }

  ngOnInit() {
    this.hostProfile = MOCK_PROFILE.find((profile) => {
      return profile._id === this.post.host;
    });
  }

}
