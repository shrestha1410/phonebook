import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyandfriendsComponent } from './familyandfriends.component';

describe('FamilyandfriendsComponent', () => {
  let component: FamilyandfriendsComponent;
  let fixture: ComponentFixture<FamilyandfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyandfriendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyandfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
