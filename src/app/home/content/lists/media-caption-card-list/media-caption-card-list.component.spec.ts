import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCaptionCardListComponent } from './media-caption-card-list.component';

describe('MediaCaptionCardListComponent', () => {
  let component: MediaCaptionCardListComponent;
  let fixture: ComponentFixture<MediaCaptionCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaCaptionCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCaptionCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
