import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCuesComponent } from './vista-cues.component';

describe('VistaCuesComponent', () => {
  let component: VistaCuesComponent;
  let fixture: ComponentFixture<VistaCuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
