import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPreguntaEmpComponent } from './nueva-pregunta-emp.component';

describe('NuevaPreguntaEmpComponent', () => {
  let component: NuevaPreguntaEmpComponent;
  let fixture: ComponentFixture<NuevaPreguntaEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPreguntaEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPreguntaEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
