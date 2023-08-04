import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFollowersComponent } from './network-followers.component';

describe('NetworkFollowersComponent', () => {
  let component: NetworkFollowersComponent;
  let fixture: ComponentFixture<NetworkFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkFollowersComponent]
    });
    fixture = TestBed.createComponent(NetworkFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
