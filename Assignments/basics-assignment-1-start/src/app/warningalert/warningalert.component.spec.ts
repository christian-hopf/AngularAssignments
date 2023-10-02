import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningalertComponent } from './warningalert.component';

describe('WarningalertComponent', () => {
  let component: WarningalertComponent;
  let fixture: ComponentFixture<WarningalertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningalertComponent]
    });
    fixture = TestBed.createComponent(WarningalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
