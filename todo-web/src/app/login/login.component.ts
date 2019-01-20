import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username;
    password: any;
    isInvalid = false;

    constructor(private router: Router, private authenticationService: HardcodedAuthenticationService) {
    }

    ngOnInit() {
    }

    login() {
        this.isInvalid = this.authenticationService.authenticate(this.username, this.password);
        this.router.navigate(['welcome', this.username]);
    }
}
