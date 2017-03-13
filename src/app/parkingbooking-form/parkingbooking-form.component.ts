import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AngularFire } from "angularfire2";
@Component({
  selector: 'app-parkingbooking-form',
  templateUrl: './parkingbooking-form.component.html',
  styleUrls: ['./parkingbooking-form.component.css']
})
export class ParkingbookingFormComponent implements OnInit {
  // slots: any = [0, 1, 2, 3, 4, 5];
  slots: any[] =
  [{ 'slot': 0, 'isReserved': false }, { 'slot': 1, 'isReserved': false }, { 'slot': 2, 'isReserved': false },
  { 'slot': 3, 'isReserved': false }, { 'slot': 4, 'isReserved': false }, { 'slot': 5, 'isReserved': false }, { 'slot': 6, 'isReserved': false },
  { 'slot': 7, 'isReserved': false }]; borderStyle;
  uid;
  bookingForm: FormGroup;
  slotNumber;
  constructor(fb: FormBuilder, private el: ElementRef, private af: AngularFire) {
    this.bookingForm = fb.group({
      'date': ['', Validators.required],
      'startHours': ['', Validators.required],
      'selectHours': ['', Validators.required],
    })
    this.af.auth.subscribe((auth) => auth !== null ? this.uid = auth.uid : console.log('logout'))
    this.af.database.list('allbookings/' + this.uid).subscribe((x) => {
      x.map((y) => { this.slotNumber = y.slotNumber });
      this.slots[this.slotNumber].isReserved = true;
      // document.getElementById(this.slotNumber).style.backgroundColor = 'black';
    })
  }
  slotNumbers(index) {
    console.log("slotsss", index);
    this.slotNumber = index;
  }
  onSubmit(value) {
    console.log(this.bookingForm.valid)
    event.preventDefault()
    if (this.bookingForm.valid) {
      // document.getElementById(this.slotNumber).style.backgroundColor = 'black';
      value['slotNumber'] = this.slotNumber;
      console.log('aaaaaa', value);
      this.af.database.object('allbookings/' + this.uid).set({
        value: value,
      })

    }
  }

  ngOnInit() {
  }

}
