import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationPopupComponent } from './activation-popup.component';

describe('ActivationPopupComponent', () => {
  let component: ActivationPopupComponent;
  let fixture: ComponentFixture<ActivationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
