import { TestBed } from '@angular/core/testing';

import { NavigationGuard } from './navigation-guard.service';

describe('NavigationGuardService', () => {
  let service: NavigationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
