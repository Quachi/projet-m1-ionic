import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {PostCardComponent} from './shared/post-card/post-card.component';
import {ShowcasePostComponent} from './showcase-post/showcase-post.component';
import {SharedModule} from '../../shared/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: HomePage
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
        HomePage,
        PostCardComponent,
        ShowcasePostComponent,
    ]
})
export class HomePageModule {
}
