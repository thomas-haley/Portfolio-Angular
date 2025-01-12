import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTextButtonComponent } from './toggle-text-button.component';

describe('ToggleTextButtonComponent', () => {
  let component: ToggleTextButtonComponent;
  let fixture: ComponentFixture<ToggleTextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleTextButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
