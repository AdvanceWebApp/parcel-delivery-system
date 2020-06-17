import { TestBed } from '@angular/core/testing';

import { RegistserviceService } from './registservice.service';

describe('RegistserviceService', () => {
  let service: RegistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
