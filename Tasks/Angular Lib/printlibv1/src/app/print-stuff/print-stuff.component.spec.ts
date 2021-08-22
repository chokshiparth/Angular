import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintStuffComponent } from './print-stuff.component';

describe('PrintStuffComponent', () => {
  let component: PrintStuffComponent;
  let fixture: ComponentFixture<PrintStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
