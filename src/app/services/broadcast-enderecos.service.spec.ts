import { TestBed, inject } from '@angular/core/testing';

import { BroadcastEnderecosService } from './broadcast-enderecos.service';

describe('BroadcastEnderecosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastEnderecosService]
    });
  });

  it('should be created', inject([BroadcastEnderecosService], (service: BroadcastEnderecosService) => {
    expect(service).toBeTruthy();
  }));
});
