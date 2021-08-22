import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesStatusComponent } from './resources-status.component';

describe('ResourcesStatusComponent', () => {
  let component: ResourcesStatusComponent;
  let fixture: ComponentFixture<ResourcesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
