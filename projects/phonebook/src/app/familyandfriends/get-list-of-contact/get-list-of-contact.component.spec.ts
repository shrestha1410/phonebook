import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListOfContactComponent } from './get-list-of-contact.component';

describe('GetListOfContactComponent', () => {
  let component: GetListOfContactComponent;
  let fixture: ComponentFixture<GetListOfContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetListOfContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetListOfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
