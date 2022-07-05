import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoDosEmpComponent } from './paso-dos-emp.component';

describe('PasoDosEmpComponent', () => {
  let component: PasoDosEmpComponent;
  let fixture: ComponentFixture<PasoDosEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoDosEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoDosEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
