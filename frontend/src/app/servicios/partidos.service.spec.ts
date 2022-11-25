import { TestBed } from '@angular/core/testing';

import { PartidosService } from './partidos.service';

describe('PartidosService', () => {
  let service: PartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
