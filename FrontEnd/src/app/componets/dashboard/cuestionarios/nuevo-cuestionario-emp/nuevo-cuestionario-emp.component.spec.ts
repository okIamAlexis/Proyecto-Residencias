import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCuestionarioEmpComponent } from './nuevo-cuestionario-emp.component';

describe('NuevoCuestionarioEmpComponent', () => {
  let component: NuevoCuestionarioEmpComponent;
  let fixture: ComponentFixture<NuevoCuestionarioEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCuestionarioEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCuestionarioEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
