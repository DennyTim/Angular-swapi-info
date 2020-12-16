import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsPreviewComponent } from './planets-preview.component';

describe('PlanetsStartComponent', () => {
  let component: PlanetsPreviewComponent;
  let fixture: ComponentFixture<PlanetsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
