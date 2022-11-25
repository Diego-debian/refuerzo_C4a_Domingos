import { TestBed } from '@angular/core/testing';

import { CandidatosService } from './candidatos.service';

describe('CandidatosService', () => {
  let service: CandidatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
