import { TestBed } from '@angular/core/testing';

import { InfoRecetaService } from './info-receta.service';

describe('InfoRecetaService', () => {
  let service: InfoRecetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoRecetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
