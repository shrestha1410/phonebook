import { TestBed } from '@angular/core/testing';

import { FamilyandfriendsService } from './familyandfriends.service';

describe('FamilyandfriendsService', () => {
  let service: FamilyandfriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyandfriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
