import { TestBed } from '@angular/core/testing';

import { SaladService } from './salad.service';

describe('SaladService', () => {
  let service: SaladService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaladService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
