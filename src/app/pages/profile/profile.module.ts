import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';
import {SharedModule} from '../../shared/shared.module';
import {AddPostComponent} from './add-post/add-post.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [ProfilePage, AddPostComponent],
    entryComponents: [AddPostComponent]
})
export class ProfilePageModule {
}
