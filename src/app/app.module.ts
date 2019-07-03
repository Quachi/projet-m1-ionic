import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './pages/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {IonicStorageModule} from '@ionic/storage';

import {UserService} from './shared/services/user.service';
import {FileValidatorDirective} from './directive/file-validator.directive';

@NgModule({
    declarations: [AppComponent, FileValidatorDirective],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        SharedModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
