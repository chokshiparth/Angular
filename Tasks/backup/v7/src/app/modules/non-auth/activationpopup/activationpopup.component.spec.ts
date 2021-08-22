import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationpopupComponent } from './activationpopup.component';

describe('ActivationpopupComponent', () => {
  let component: ActivationpopupComponent;
  let fixture: ComponentFixture<ActivationpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
