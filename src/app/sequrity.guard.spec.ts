import { TestBed, async, inject } from '@angular/core/testing';

import { SecurityGuard } from './security-guard.service';

describe('SequrityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityGuard]
    });
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
