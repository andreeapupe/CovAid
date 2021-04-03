import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewAppointmentModalComponent } from './user-new-appointment-modal.component';

describe('UserNewAppointmentModalComponent', () => {
  let component: UserNewAppointmentModalComponent;
  let fixture: ComponentFixture<UserNewAppointmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewAppointmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewAppointmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
