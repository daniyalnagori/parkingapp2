import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AppService } from "../app.service";
import { AngularFire, FirebaseListObservable } from "angularfire2";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  adminReplyForm: FormGroup;
  uids: string;
  replyuid = [];
  type: number;
  name;
  userfeedback: Array<string>;
  allFeedback: FirebaseListObservable<any>;
  userUids = [];
  feedbackuids = [];
  adminreplytouser: FirebaseListObservable<any>;
  constructor(fb: FormBuilder, private af: AngularFire, private appService: AppService) {
    this.feedbackForm = fb.group({
      'comments': ['', Validators.required]
    })
    this.adminReplyForm = fb.group({
      'comments': ['', Validators.required]
    })
  }

  ngOnInit() {
    this.appService.getauth();
    this.af.auth.subscribe((auth) => auth !== null ? this.adminreplytouser = this.af.database.list('feedback/' + auth.uid) : console.log('sorry'))
    this.af.auth.
      subscribe(auth => auth != null ? this.af.database.list('users/' + auth.uid).subscribe((x) => {
        x.map((c) => {
          this.type = c.type;
          this.name = c.name
        })
      }) : "");
    this.af.auth.subscribe(auth => auth != null ?
      this.af.database.list('feedback/' + auth.uid).subscribe((x) => { x.map((y) => { this.userfeedback = y.comments }) })
      : "");
    this.allFeedback = this.af.database.list('/allFeedback/');
    // this.af.database.list('/allFeedback/').subscribe((x) => {
    //   x.map((y) => { console.log(y.$key) });
    // })
    this.af.database.list('feedback/').subscribe((x) => { x.map((y) => { this.replyuid.push(y.$key) }) });
    setTimeout(() => {
      console.log(this.replyuid);
    }, 2000);
  }
  onSubmit(value) {
    this.af.auth.subscribe(auth => auth != null ?
      this.uids = auth.uid
      : "");
    value['name'] = this.name;
    value['uids'] = this.uids;
    this.appService.UserFeedbackSubmit(value);
  }
  replyToUser(names, i, uidValue, foo) {
    console.log(names, i, uidValue, foo);
    this.af.database.list('feedback/').subscribe((x) => { x.map((y) => { this.replyuid.push(y.$key) }) });
    setTimeout(() => {
      this.af.database.list('feedback/' + uidValue).push({
        value: names,
      })
    }, 2000);
  }
}
