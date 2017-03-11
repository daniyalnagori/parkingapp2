import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AngularFire } from "angularfire2";
@Component({
  selector: 'app-parkingbooking-form',
  templateUrl: './parkingbooking-form.component.html',
  styleUrls: ['./parkingbooking-form.component.css']
})
export class ParkingbookingFormComponent implements OnInit {
  slots: any = [0, 1, 2, 3, 4, 5];
  borderStyle;
  uid;
  bookingForm: FormGroup;
  slotNumber;
  constructor(fb: FormBuilder, private el: ElementRef, private af: AngularFire) {
    this.bookingForm = fb.group({
      'date': ['', Validators.required],
      'startHours': ['', Validators.required],
      'selectHours': ['', Validators.required],
    })
  }
  slotNumbers(index) {
    console.log("slotsss", index);
    this.slotNumber = index;
  }
  onSubmit(value) {
    document.getElementById(this.slotNumber).style.backgroundColor = 'black';

    // this.slots[this.slotNumber].style.backgroundColor = 'white'
    // let colorChange = document.getElementById('change');
    // colorChange.style.backgroundColor = 'black';
    value['slotNumber'] = this.slotNumber;
    console.log('aaaaaa', value);
    this.af.database.object('allbookings/' + this.uid).set({
      value: value,
    })
  }

  ngOnInit() {
    this.af.auth.subscribe((auth) => auth !== null ? this.uid = auth.uid : console.log('logout'))
  }

}
