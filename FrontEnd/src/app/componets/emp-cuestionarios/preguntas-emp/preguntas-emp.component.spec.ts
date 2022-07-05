import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasEmpComponent } from './preguntas-emp.component';

describe('PreguntasEmpComponent', () => {
  let component: PreguntasEmpComponent;
  let fixture: ComponentFixture<PreguntasEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
