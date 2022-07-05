import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoUnoEmpComponent } from './paso-uno-emp.component';

describe('PasoUnoEmpComponent', () => {
  let component: PasoUnoEmpComponent;
  let fixture: ComponentFixture<PasoUnoEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoUnoEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoUnoEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
