import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrCuestionarioComponent } from './egr-cuestionario.component';

describe('EgrCuestionarioComponent', () => {
  let component: EgrCuestionarioComponent;
  let fixture: ComponentFixture<EgrCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgrCuestionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgrCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
