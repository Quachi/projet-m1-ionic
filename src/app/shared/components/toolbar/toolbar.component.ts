import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ScrollHideConfig} from '../../../directive/scroll-hide.directive';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    footerScrollConfig: ScrollHideConfig = {cssProperty: 'margin-bottom', maxValue: undefined};
    isLogged = false;
    @Input() pageContent;

    constructor(private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        this.isLogged = this.userService.getCurrentUser() !== null;
    }

    redirect(route) {
        this.router.navigate(['/' + route])
            .catch(err => console.error(err));
    }
}
