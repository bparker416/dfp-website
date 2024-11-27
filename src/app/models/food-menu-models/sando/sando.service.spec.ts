import { TestBed } from '@angular/core/testing';

import { SandoService } from './sando.service';

describe('SandoService', () => {
  let service: SandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
