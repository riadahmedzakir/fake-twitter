import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserFollowersComponent } from './view-user-followers.component';

describe('ViewUserFollowersComponent', () => {
  let component: ViewUserFollowersComponent;
  let fixture: ComponentFixture<ViewUserFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserFollowersComponent]
    });
    fixture = TestBed.createComponent(ViewUserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
