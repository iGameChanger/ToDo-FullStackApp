import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username;
    password: any;
    isInvalid = false;

    constructor() {
    }

    ngOnInit() {
    }

    login() {
        if (this.username === 'admin' && this.password === 'admin') {
            console.log('Login Success');
            this.isInvalid = false;
        } else {
            this.isInvalid = true;
        }
    }
}
