import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEgrComponent } from './navbar-egr.component';

describe('NavbarEgrComponent', () => {
  let component: NavbarEgrComponent;
  let fixture: ComponentFixture<NavbarEgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
