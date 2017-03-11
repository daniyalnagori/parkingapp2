import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingbookingFormComponent } from './parkingbooking-form.component';

describe('ParkingbookingFormComponent', () => {
  let component: ParkingbookingFormComponent;
  let fixture: ComponentFixture<ParkingbookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingbookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingbookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
