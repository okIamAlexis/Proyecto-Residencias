import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuesEmpComponent } from './view-cues-emp.component';

describe('ViewCuesEmpComponent', () => {
  let component: ViewCuesEmpComponent;
  let fixture: ComponentFixture<ViewCuesEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCuesEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCuesEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
