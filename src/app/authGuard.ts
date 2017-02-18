// import {Injectable,OnInit} from "@angular/core";
// import {CanActivate,Router} from "@angular/router";
// import {AngularFire} from "angularfire2";
// import 'rxjs/add/operator/take';
// @Injectable()

// export class AuthGuardService implements CanActivate{
//     login : boolean = false;
//     constructor(private af: AngularFire,private router: Router){}
// CanActivate(){
// return this.af.auth.map(user => {
//     if(user != null){
//         this.login = true;
//     }
//     else{
//         this.login = false;
//         this.router.navigate(['/signin']);
//     }
// }).take(1);
// }
// ngOnInit(){

// }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
@Injectable()

export class AuthGuardService implements CanActivate {
    login: boolean = true;
    constructor(private af: AngularFire, private route: Router) { }
    canActivate() {
        return this.af.auth.map(user => {
            if (user != null) {
                this.login = true;
                return true;
            }
            else {
                this.login = false;
                this.route.navigate(['/signin']);
                return false;
            }
        }).take(1)

    }
}