import { TestBed, async, inject } from '@angular/core/testing';

import { AuntenticacionGuard } from './auntenticacion.guard';

describe('AuntenticacionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuntenticacionGuard]
    });
  });

  it('should ...', inject([AuntenticacionGuard], (guard: AuntenticacionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
