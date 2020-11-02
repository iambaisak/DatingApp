/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServeService } from './Serve.service';

describe('Service: Serve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServeService]
    });
  });

  it('should ...', inject([ServeService], (service: ServeService) => {
    expect(service).toBeTruthy();
  }));
});
