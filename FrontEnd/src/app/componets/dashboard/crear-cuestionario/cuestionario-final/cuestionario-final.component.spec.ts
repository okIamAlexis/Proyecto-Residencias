import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioFinalComponent } from './cuestionario-final.component';

describe('CuestionarioFinalComponent', () => {
  let component: CuestionarioFinalComponent;
  let fixture: ComponentFixture<CuestionarioFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionarioFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
