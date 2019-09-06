import { TestBed } from '@angular/core/testing';

import { AunteticacionService } from './aunteticacion.service';

describe('AunteticacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AunteticacionService = TestBed.get(AunteticacionService);
    expect(service).toBeTruthy();
  });
});
