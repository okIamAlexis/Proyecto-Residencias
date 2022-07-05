import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrContCuestionarioComponent } from './egr-cont-cuestionario.component';

describe('EgrContCuestionarioComponent', () => {
  let component: EgrContCuestionarioComponent;
  let fixture: ComponentFixture<EgrContCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgrContCuestionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgrContCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
