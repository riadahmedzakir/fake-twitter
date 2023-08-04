import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkContainerComponent } from './network-container.component';

describe('NetworkContainerComponent', () => {
  let component: NetworkContainerComponent;
  let fixture: ComponentFixture<NetworkContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkContainerComponent]
    });
    fixture = TestBed.createComponent(NetworkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
