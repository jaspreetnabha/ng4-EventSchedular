import { TestBed, inject } from '@angular/core/testing';

import { FirstComponentService } from './first-component.service';

describe('FirstComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstComponentService]
    });
  });

  it('should be created', inject([FirstComponentService], (service: FirstComponentService) => {
    expect(service).toBeTruthy();
  }));
});
