import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityIndicatorComponent } from './availability-indicator.component';

describe('AvailabilityIndicatorComponent', () => {
  let component: AvailabilityIndicatorComponent;
  let fixture: ComponentFixture<AvailabilityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
