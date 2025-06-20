import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyStopsComponent } from './nearby-stops.component';

describe('NearbyStopsComponent', () => {
  let component: NearbyStopsComponent;
  let fixture: ComponentFixture<NearbyStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearbyStopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
