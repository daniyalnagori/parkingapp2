import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  constructor(fb: FormBuilder, private af: AngularFire, private appService: AppService) {
    this.signInForm = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  onSubmit(value) {
    this.appService.loginUser(value);
  }
  ngOnInit() {
  }

}
