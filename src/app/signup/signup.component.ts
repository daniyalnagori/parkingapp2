import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFire } from "angularfire2";
import { AppService } from "../app.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(fb: FormBuilder, af: AngularFire, private appService: AppService) {
    this.signUpForm = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
      'cpassword': ['', Validators.required],
      'type': ['1', Validators.required]
    })
  }
  onSubmit(value) {
    this.appService.createUser(value)
  }
  ngOnInit() {
  }

}
