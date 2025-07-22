import {TestBed} from '@angular/core/testing';

import {HttpWrapper} from './http-wrapper.service';

describe('HttpWrapper', () => {
  let service: HttpWrapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpWrapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
