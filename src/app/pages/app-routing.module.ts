import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'post/:id', loadChildren: './post/post.module#PostPageModule'},
    {path: 'result-search', loadChildren: './result-search/result.search.module#ResultSearchModule'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'search', loadChildren: './search/search.module#SearchPageModule'},
    {path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
    {
        path: '**',
        redirectTo: 'home',
    },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
