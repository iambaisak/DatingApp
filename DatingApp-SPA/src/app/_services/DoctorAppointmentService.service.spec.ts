/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorAppointmentServiceService } from './DoctorAppointmentService.service';

describe('Service: DoctorAppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorAppointmentServiceService]
    });
  });

  it('should ...', inject([DoctorAppointmentServiceService], (service: DoctorAppointmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
