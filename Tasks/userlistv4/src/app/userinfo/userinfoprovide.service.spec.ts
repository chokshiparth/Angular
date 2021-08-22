import { TestBed } from '@angular/core/testing';

import { UserinfoprovideService } from './userinfoprovide.service';

describe('UserinfoprovideService', () => {
  let service: UserinfoprovideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinfoprovideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
