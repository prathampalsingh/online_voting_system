import { TestBed } from '@angular/core/testing';

import { AdminLoginGuardService } from './admin-login-guard.service';

describe('AdminLoginGuardService', () => {
  let service: AdminLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
