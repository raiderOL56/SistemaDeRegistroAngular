import { TestBed } from '@angular/core/testing';

import { CargarJSService } from './cargar-js.service';

describe('CargarJSService', () => {
  let service: CargarJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
