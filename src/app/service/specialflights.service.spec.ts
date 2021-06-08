import { TestBed } from '@angular/core/testing';

import { SpecialflightsService } from './specialflights.service';

describe('SpecialflightsService', () => {
  let service: SpecialflightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialflightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
