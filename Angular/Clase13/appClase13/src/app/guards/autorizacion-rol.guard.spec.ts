import { TestBed, async, inject } from '@angular/core/testing';

import { AutorizacionRolGuard } from './autorizacion-rol.guard';

describe('AutorizacionRolGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizacionRolGuard]
    });
  });

  it('should ...', inject([AutorizacionRolGuard], (guard: AutorizacionRolGuard) => {
    expect(guard).toBeTruthy();
  }));
});
