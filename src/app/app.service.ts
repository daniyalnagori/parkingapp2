import { Injectable } from "@angular/core";
import { AngularFire, AuthMethods, AuthProviders } from "angularfire2";
import {Router} from "@angular/router";
@Injectable()

export class AppService {
    constructor(private af: AngularFire,private router: Router) {

    }
    createUser(value) {
        this.af.auth.createUser({ email: value.email, password: value.password }).then((x) => {
            this.router.navigate(['/dashboard']);
        }).catch((err) => {
            alert(err);
        })
    }
    loginUser(value) {
        this.af.auth.login({ email: value.email, password: value.password },
        {method: AuthMethods.Password, provider: AuthProviders.Password} ).then(()=> {
            this.router.navigate(['/dashboard'])
        }).catch((err)=> {
            alert(err);
        })
    }
}