import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMediaComponent } from './static-media.component';

describe('StaticMediaComponent', () => {
  let component: StaticMediaComponent;
  let fixture: ComponentFixture<StaticMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
