import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { User, Token } from "../../models/user"
import { HttpService } from "../../shared/services/http.service"
import { UserService } from "../../shared/services/user.service"

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private HttpService : HttpService,
        private UserService: UserService
        ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    submit() {
        const user: User = this.loginForm.getRawValue()
        this.HttpService.post("/profile/login", user).subscribe((data: Token) => {
            data.expiresIn = Date.now() + (data.expiresIn*1000)
            this.UserService.setTokenAndExpiration(data)
            this.router.navigate(["/home"]).catch(err => console.error(err))
        }, err => console.log("ERROR", err))
    }
}
