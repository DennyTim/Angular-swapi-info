import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetResidentsComponent } from './planet-residents.component';

describe('PlanetResidentsComponent', () => {
  let component: PlanetResidentsComponent;
  let fixture: ComponentFixture<PlanetResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
