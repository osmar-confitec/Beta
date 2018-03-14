import { TestBed, inject } from '@angular/core/testing';

import { BroadcastBooleanoService } from './broadcast-booleano.service';

describe('BroadcastBooleanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastBooleanoService]
    });
  });

  it('should be created', inject([BroadcastBooleanoService], (service: BroadcastBooleanoService) => {
    expect(service).toBeTruthy();
  }));
});
