import { TestBed } from '@angular/core/testing';

import { StrainDataService } from './strain-data.service';

describe('StrainDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrainDataService = TestBed.get(StrainDataService);
    expect(service).toBeTruthy();
  });
});
