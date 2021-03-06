import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentsPageComponent } from './patient-appointments-page.component';

describe('PatientAppointmentsPageComponent', () => {
  let component: PatientAppointmentsPageComponent;
  let fixture: ComponentFixture<PatientAppointmentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppointmentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
