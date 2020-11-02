/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddpatientService } from './addpatient.service';

describe('Service: Addpatient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddpatientService]
    });
  });

  it('should ...', inject([AddpatientService], (service: AddpatientService) => {
    expect(service).toBeTruthy();
  }));
});
