import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
    providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

    constructor(private router: Router, private authenticationService: HardcodedAuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("Called URL: ", state.url);
        let user = sessionStorage.getItem("username");
        if (user === null) {
            this.router.navigate(['/login']);
            return false;
        }
        // this.router.navigate([state.url]);
        return true;
    }
}
