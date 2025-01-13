import { TestBed } from '@angular/core/testing';

import { GetListOfContactService } from './get-list-of-contact.service';

describe('GetListOfContactService', () => {
  let service: GetListOfContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListOfContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
