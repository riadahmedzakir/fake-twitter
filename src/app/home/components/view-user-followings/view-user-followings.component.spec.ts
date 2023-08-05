import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserFollowingsComponent } from './view-user-followings.component';

describe('ViewUserFollowingsComponent', () => {
  let component: ViewUserFollowingsComponent;
  let fixture: ComponentFixture<ViewUserFollowingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserFollowingsComponent]
    });
    fixture = TestBed.createComponent(ViewUserFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
