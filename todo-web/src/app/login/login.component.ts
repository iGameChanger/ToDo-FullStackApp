import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username;
    password: any;
    isInvalid = false;

    constructor(private rouuter: Router) {
    }

    ngOnInit() {
    }

    login() {
        if (this.username === 'admin' && this.password === 'admin') {
            console.log('Login Success');
            this.isInvalid = false;
            this.rouuter.navigate(['welcome', this.username]);
        } else {
            this.isInvalid = true;
        }
    }
}
