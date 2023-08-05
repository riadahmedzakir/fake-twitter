import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTweetComponent } from './make-tweet.component';

describe('MakeTweetComponent', () => {
  let component: MakeTweetComponent;
  let fixture: ComponentFixture<MakeTweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeTweetComponent]
    });
    fixture = TestBed.createComponent(MakeTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
