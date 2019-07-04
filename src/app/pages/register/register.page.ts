import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './must-match';
import {ProfileService} from '../profile/service/profile.service';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private profileService: ProfileService,
                private userService: UserService,
                private router: Router,
                public loadingController: LoadingController) {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            mail: ['', [Validators.required, Validators.email]],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    ngOnInit() {
        this.userService.check()
            .then(hasToken => {
                if (hasToken) {
                    this.router.navigate(['/'])
                        .catch(error => console.error(error));
                }
            });
    }

    get f() {
        return this.registerForm.controls;
    }

    submit() {
        this.Loading();
        this.profileService.register(this.registerForm.value)
            .then(() => {
                this.router.navigate(['/login'])
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
