import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkSelectorComponent } from './light-dark-selector.component';

describe('LightDarkSelectorComponent', () => {
  let component: LightDarkSelectorComponent;
  let fixture: ComponentFixture<LightDarkSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightDarkSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightDarkSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
