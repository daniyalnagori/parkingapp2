import { Injectable } from "@angular/core";
import { AngularFire, AuthMethods, AuthProviders } from "angularfire2";
import { Router } from "@angular/router";
@Injectable()

export class AppService {
    uid: string;
    type: number;
    userName: string;
    constructor(private af: AngularFire, private router: Router) {
    }
    createUser(value) {
        this.af.auth.createUser({ email: value.email, password: value.password }).then((x) => {
            this.router.navigate(['/dashboard']);
            this.uid = x.uid;
            this.af.database.object('users/' + this.uid + '/value/').set({
                type: value.type,
                name: value.firstName
            })
        }).catch((err) => {
            alert(err);
        })
    }
    loginUser(value) {
        this.af.auth.login({ email: value.email, password: value.password },
            { method: AuthMethods.Password, provider: AuthProviders.Password }).then((x) => {
                this.router.navigate(['/dashboard'])
            }).catch((err) => {
                alert(err);
            })
    }
    getauth() {
        return this.af.auth
            .subscribe(auth => auth != null ? this.uid = auth.uid : console.info("user is Logged Out"));
    }
    UserFeedbackSubmit(value) {
        this.af.database.object('feedback/' + this.uid).set({
            value: value
        })
        this.af.database.list('allFeedback').push({
            value: value,
        })
    }
}