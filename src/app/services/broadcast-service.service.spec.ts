import { TestBed, inject } from '@angular/core/testing';

import { BroadcastServiceService } from './broadcast-service.service';

describe('BroadcastServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastServiceService]
    });
  });

  it('should be created', inject([BroadcastServiceService], (service: BroadcastServiceService) => {
    expect(service).toBeTruthy();
  }));
});
