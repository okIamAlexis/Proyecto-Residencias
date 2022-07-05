import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrRespuestasComponent } from './egr-respuestas.component';

describe('EgrRespuestasComponent', () => {
  let component: EgrRespuestasComponent;
  let fixture: ComponentFixture<EgrRespuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgrRespuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgrRespuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
