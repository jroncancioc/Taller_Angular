/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { SerieService } from './conferencia.service';

describe('Service: Serie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieService]
    });
  });

  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});