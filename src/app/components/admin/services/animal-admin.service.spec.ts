import { TestBed } from '@angular/core/testing';

import { AnimalAdminService } from './animal-admin.service';

describe('AnimalAdminService', () => {
  let service: AnimalAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
