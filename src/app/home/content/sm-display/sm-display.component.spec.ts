import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmDisplayComponent } from './sm-display.component';

describe('SmDisplayComponent', () => {
  let component: SmDisplayComponent;
  let fixture: ComponentFixture<SmDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
