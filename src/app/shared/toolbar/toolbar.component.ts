import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ScrollHideConfig} from '../../directive/scroll-hide.directive';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
    @Input() pageContent;
    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    redirect(route) {
        this.router.navigate(['/' + route])
            .catch(err => console.error(err));
    }
}
