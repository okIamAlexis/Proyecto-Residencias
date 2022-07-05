import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCuestionariosComponent } from './emp-cuestionarios.component';

describe('EmpCuestionariosComponent', () => {
  let component: EmpCuestionariosComponent;
  let fixture: ComponentFixture<EmpCuestionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCuestionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
