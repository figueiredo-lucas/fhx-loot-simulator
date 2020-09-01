import { TestBed } from '@angular/core/testing';

import { LootsService } from './loots.service';

describe('LootsService', () => {
  let service: LootsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LootsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
