import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {ScrollHideConfig} from '../../../directive/scroll-hide.directive'
import { UserService } from "../../services/user.service"


@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    footerScrollConfig: ScrollHideConfig = {cssProperty: 'margin-bottom', maxValue: undefined}
    isLogged = false
    @Input() pageContent

    constructor(private router: Router, private UserService: UserService) {
    }

    ngOnInit() {
        console.log("check : ", this.UserService.check())
        console.log("token : ", this.UserService.getToken())
        console.log("expiration date : ", this.UserService.getExpiration())
        this.isLogged = this.UserService.check()
    }

    redirect(route) {
        this.router.navigate(['/' + route]).catch(err => console.error(err))
        this.isLogged = this.UserService.check()
    }
}
