import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthModuleComponent } from './non-auth-module.component';

describe('NonAuthModuleComponent', () => {
  let component: NonAuthModuleComponent;
  let fixture: ComponentFixture<NonAuthModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAuthModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAuthModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
