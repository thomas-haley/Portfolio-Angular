import { Component, inject, Input, signal } from '@angular/core';
import { ComponentConfigLoaderService } from '../../../../_services/component-config-loader.service';
import { map } from 'rxjs';
import { ListConfig } from '../../../../_models/list-config';
import { GenericConfig } from '../../../../_models/generic-config';
import { ComponentConfig } from '../../../../_models/component-config';
import { MediaCaptionCardComponent } from '../../media-caption-card/media-caption-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-caption-card-list',
  standalone: true,
  imports: [
    MediaCaptionCardComponent
  ],
  templateUrl: './media-caption-card-list.component.html',
  styleUrl: './media-caption-card-list.component.css'
})
export class MediaCaptionCardListComponent {
  @Input() listTag: string = '';
  private configLoader = inject(ComponentConfigLoaderService);
  config = signal<GenericConfig|null>(null);

  constructor(private router: Router) {}

  ngOnInit()
  { 
    // this.config = this.configLoader.loadConfig('caption-card-list.json').subscribe(response => console.log(response))
      this.configLoader.loadConfig('caption-card-list.json').subscribe((response) => {
        this.config.set(response[this.router.url]);
        // this.config.set(response);
    })
  }

  mapCardListListConfig()
  {
    
  }
}
