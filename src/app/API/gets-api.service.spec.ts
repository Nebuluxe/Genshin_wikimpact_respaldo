import { TestBed } from '@angular/core/testing';

import { GetsApiService } from './gets-api.service';

describe('GetsApiService', () => {
  let service: GetsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
