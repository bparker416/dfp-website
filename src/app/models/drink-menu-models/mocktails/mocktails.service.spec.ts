import { TestBed } from '@angular/core/testing';

import { MocktailsService } from './mocktails.service';

describe('MocktailsService', () => {
  let service: MocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
