import { TestBed } from '@angular/core/testing';

import { LibationsService } from './libations.service';

describe('LibationsService', () => {
  let service: LibationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
