import { TestBed, async, inject } from '@angular/core/testing';

import { AunteticacionGuard } from './aunteticacion.guard';

describe('AunteticacionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AunteticacionGuard]
    });
  });

  it('should ...', inject([AunteticacionGuard], (guard: AunteticacionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
