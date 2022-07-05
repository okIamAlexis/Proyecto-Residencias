import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuestionaariosEgrComponent } from './view-cuestionaarios-egr.component';

describe('ViewCuestionaariosEgrComponent', () => {
  let component: ViewCuestionaariosEgrComponent;
  let fixture: ComponentFixture<ViewCuestionaariosEgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCuestionaariosEgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCuestionaariosEgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
