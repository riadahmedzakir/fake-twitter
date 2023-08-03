import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreUserComponent } from './explore-user.component';

describe('ExploreUserComponent', () => {
  let component: ExploreUserComponent;
  let fixture: ComponentFixture<ExploreUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreUserComponent]
    });
    fixture = TestBed.createComponent(ExploreUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
