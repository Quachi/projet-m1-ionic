import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from './must-match';
import {ProfileService} from '../profile/service/profile.service';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

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
                private router: Router) {
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
        console.log(this.registerForm.value);
        this.profileService.register(this.registerForm.value)
            .then(() => this.router.navigate(['/login']));
    }


}
