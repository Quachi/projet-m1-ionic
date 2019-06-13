import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ResultSearchPage} from './result.search.page';
import {PostSummupComponent} from './shared/post-summup/post-summup.component';

const routes: Routes = [
    {
        path: '',
        component: ResultSearchPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ResultSearchPage,
        PostSummupComponent
    ]
})
export class ResultSearchModule {
}
