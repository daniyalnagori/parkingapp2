import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from "@angular/forms";
import {AppService} from "../app.service";
import {AngularFire} from "angularfire2";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbackForm :  FormGroup;
  constructor(fb:FormBuilder,private af: AngularFire,private appService: AppService) { 
     this.feedbackForm = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'telephone': ['', Validators.required],
      'comments': ['', Validators.required]
    })
  }
  onSubmit(value){
   
  }

  ngOnInit() {
  }

}
