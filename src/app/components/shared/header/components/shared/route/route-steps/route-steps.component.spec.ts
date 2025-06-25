import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStepsComponent } from './route-steps.component';

describe('RouteStepsComponent', () => {
  let component: RouteStepsComponent;
  let fixture: ComponentFixture<RouteStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
