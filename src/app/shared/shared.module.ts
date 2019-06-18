import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {IonicModule} from '@ionic/angular';
import {ScrollHideDirective} from '../directive/scroll-hide.directive';
import {HttpService} from './http.service';

@NgModule({
    declarations: [ToolbarComponent, ScrollHideDirective],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ToolbarComponent,
    ],
    providers: [
        HttpService
    ]
})
export class SharedModule {
}
