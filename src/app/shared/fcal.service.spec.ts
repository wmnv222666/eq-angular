import { TestBed, inject } from '@angular/core/testing';

import { FcalService } from './fcal.service';

describe('FcalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FcalService]
    });
  });

  it('should be created', inject([FcalService], (service: FcalService) => {
    expect(service).toBeTruthy();
  }));
});
