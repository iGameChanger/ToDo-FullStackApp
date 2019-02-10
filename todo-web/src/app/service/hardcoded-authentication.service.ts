import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HardcodedAuthenticationService {

    constructor() {
    }

    authenticate(username, password) {
        if (username === 'admin' && password === 'admin') {
            sessionStorage.setItem("username", username);
            return true;
        } else {
            return false;
        }
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("username");
        // console.log(user);
        if(user === null ){
            return false;
        }
        return true;
        // return !(user === null);
    }

    logout() {
        sessionStorage.removeItem("username");
    }
}
