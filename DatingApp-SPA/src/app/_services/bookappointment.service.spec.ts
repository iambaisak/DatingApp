/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookappointmentService } from './bookappointment.service';

describe('Service: Bookappointment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookappointmentService]
    });
  });

  it('should ...', inject([BookappointmentService], (service: BookappointmentService) => {
    expect(service).toBeTruthy();
  }));
});
