import { TestBed } from '@angular/core/testing';

import { VoterLoginGuardService } from './voter-login-guard.service';

describe('VoterLoginGuardService', () => {
  let service: VoterLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
