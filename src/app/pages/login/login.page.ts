import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {LoginUser} from '../../models/user';
import {HttpService} from '../../shared/services/http.service';
import {Router} from '@angular/router';
import { Token } from "../../models/token"

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
                private router: Router) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    submit() {
        const user: LoginUser = this.loginForm.getRawValue();
        this.httpService.post("/profile/login", user).subscribe((data: Token) => {
            this.userService.set(data);
            this.router.navigate(["/home"]).catch(err => console.error(err))
        }, err => console.error(err))
        // console.log(user);
        // this.userService.login(user).then(response => {
        //     this.httpService.setToken(response.token);
        //     this.userService.currentUserSubject.next(user);
        //     this.router.navigate(['/home'])
        //         .catch(error => console.error(error));
        //     localStorage.setItem('currentUser', JSON.stringify(user));
        // });
    }
}
