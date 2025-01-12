import { Component, Input } from '@angular/core';
import { StaticMediaComponent } from '../static-media/static-media.component';
import { MediaCaptionCardConfig } from '../../../_models/media-caption-card-config';

@Component({
  selector: 'app-media-caption-card',
  standalone: true,
  imports: [StaticMediaComponent],
  templateUrl: './media-caption-card.component.html',
  styleUrl: './media-caption-card.component.css'
})
export class MediaCaptionCardComponent {
  @Input() cardData! : MediaCaptionCardConfig;

  @Input() mediaLeft : boolean = true;
  @Input() media : string|null = null;
  @Input() title : string|null = null;
  @Input() description : string|null = null;
}
