import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCaptionCardComponent } from './media-caption-card.component';

describe('MediaCaptionCardComponent', () => {
  let component: MediaCaptionCardComponent;
  let fixture: ComponentFixture<MediaCaptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaCaptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCaptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
