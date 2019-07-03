import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
    {path: 'post/:id', loadChildren: './post/post.module#PostPageModule'},
    {path: 'result-search', loadChildren: './result-search/result.search.module#ResultSearchModule'},
    {path: 'search', loadChildren: './search/search.module#SearchPageModule'},
    {path: 'profile/:id', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard]},
    {
        path: '**',
        redirectTo: 'home',
    },
    {path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
