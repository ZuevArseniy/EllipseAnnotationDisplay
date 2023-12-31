import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawButtonComponent } from './draw-button.component';

describe('DrawButtonComponent', () => {
  let component: DrawButtonComponent;
  let fixture: ComponentFixture<DrawButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawButtonComponent]
    });
    fixture = TestBed.createComponent(DrawButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
