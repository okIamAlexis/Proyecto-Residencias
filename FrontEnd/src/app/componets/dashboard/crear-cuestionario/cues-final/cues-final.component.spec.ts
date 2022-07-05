import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuesFinalComponent } from './cues-final.component';

describe('CuesFinalComponent', () => {
  let component: CuesFinalComponent;
  let fixture: ComponentFixture<CuesFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuesFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuesFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
