import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {LoginUser} from '../../models/user';
import {HttpService} from '../../shared/services/http.service';
import {Router} from '@angular/router';
import {Token} from '../../models/token';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private httpService: HttpService,
                private router: Router,
                public loadingController: LoadingController) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    submit() {
        const user: LoginUser = this.loginForm.getRawValue();
        this.Loading().catch(error => console.log(error));
        this.httpService.post<Token>('/profile/login', user)
            .then((data: Token) => {
                this.userService.set(data);
                this.router.navigate(['/home'])
                    .catch(error => console.error(error));
            });
    }

    async Loading() {
        const loading = await this.loadingController.create({
            duration: 4000,
            translucent: true,
            cssClass: 'custom-class custom-loading',
            spinner: 'crescent',
        });
        return await loading.present();
    }
}
