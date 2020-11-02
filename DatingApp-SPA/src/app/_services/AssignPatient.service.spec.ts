/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssignPatientService } from './AssignPatient.service';

describe('Service: AssignPatient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignPatientService]
    });
  });

  it('should ...', inject([AssignPatientService], (service: AssignPatientService) => {
    expect(service).toBeTruthy();
  }));
});
