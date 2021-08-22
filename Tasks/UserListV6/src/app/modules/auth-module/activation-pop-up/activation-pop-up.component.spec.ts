import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationPopUpComponent } from './activation-pop-up.component';

describe('ActivationPopUpComponent', () => {
  let component: ActivationPopUpComponent;
  let fixture: ComponentFixture<ActivationPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
