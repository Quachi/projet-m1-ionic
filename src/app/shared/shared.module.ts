import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {IonicModule} from '@ionic/angular';
import {ScrollHideDirective} from '../directive/scroll-hide.directive';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [ToolbarComponent, ScrollHideDirective],
    imports: [
        CommonModule,
        IonicModule,
        HttpClientModule
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
