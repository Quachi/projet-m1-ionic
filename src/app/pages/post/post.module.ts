import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PostPage} from './post.page';
import {PostHeaderComponent} from './post-header/post-header.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostTagsComponent} from './post-tags/post-tags.component';
import {PostInformationComplementaryComponent} from './post-information-complementary/post-information-complementary.component';
import {SharedModule} from '../../shared/shared.module';
import {CommentaryModalComponent} from './commentary-modal/commentary-modal.component';

const routes: Routes = [
    {
        path: '',
        component: PostPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        PostPage,
        PostHeaderComponent,
        PostDetailComponent,
        PostTagsComponent,
        CommentaryModalComponent,
        PostInformationComplementaryComponent
    ],
    entryComponents: [
        CommentaryModalComponent
    ]
})
export class PostPageModule {
}
