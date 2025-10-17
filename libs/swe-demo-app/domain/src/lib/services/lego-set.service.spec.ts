import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { LegoSetService } from './lego-set.service';

describe('LegoSetService', () => {
  let service: LegoSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(LegoSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
