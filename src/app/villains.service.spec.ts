import { TestBed, inject } from '@angular/core/testing';
import { VillainsService } from './villains.service';

describe('VillainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillainsService]
    });
  });

  it('should ...', inject([VillainsService], (service: VillainsService) => {
    expect(service).toBeTruthy();
  }));
});
