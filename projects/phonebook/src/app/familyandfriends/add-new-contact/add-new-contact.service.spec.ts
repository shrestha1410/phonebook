import { TestBed } from '@angular/core/testing';

import { AddNewContactService } from './add-new-contact.service';

describe('AddNewContactService', () => {
  let service: AddNewContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
