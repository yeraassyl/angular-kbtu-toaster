import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFormComponent } from './toast-form.component';

describe('ToastFormComponent', () => {
  let component: ToastFormComponent;
  let fixture: ComponentFixture<ToastFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
