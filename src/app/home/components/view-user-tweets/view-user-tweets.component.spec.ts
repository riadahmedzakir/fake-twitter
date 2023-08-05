import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserTweetsComponent } from './view-user-tweets.component';

describe('ViewUserTweetsComponent', () => {
  let component: ViewUserTweetsComponent;
  let fixture: ComponentFixture<ViewUserTweetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserTweetsComponent]
    });
    fixture = TestBed.createComponent(ViewUserTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
