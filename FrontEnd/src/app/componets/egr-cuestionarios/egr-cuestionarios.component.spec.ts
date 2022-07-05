import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrCuestionariosComponent } from './egr-cuestionarios.component';

describe('EgrCuestionariosComponent', () => {
  let component: EgrCuestionariosComponent;
  let fixture: ComponentFixture<EgrCuestionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgrCuestionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgrCuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
