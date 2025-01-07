import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHintRowComponent } from './form-hint-row.component';

describe('FormHintRowComponent', () => {
  let component: FormHintRowComponent;
  let fixture: ComponentFixture<FormHintRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHintRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHintRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
