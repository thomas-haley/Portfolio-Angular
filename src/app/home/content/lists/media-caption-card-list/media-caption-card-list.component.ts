import { Component, inject, Input, signal } from '@angular/core';
import { ComponentConfigLoaderService } from '../../../../_services/component-config-loader.service';
import { map } from 'rxjs';
import { ListConfig } from '../../../../_models/list-config';
import { GenericConfig } from '../../../../_models/generic-config';
import { ComponentConfig } from '../../../../_models/component-config';
import { MediaCaptionCardComponent } from '../../media-caption-card/media-caption-card.component';
import { Router } from '@angular/router';
import { ComponentListLoaderService } from '../../../../_services/content-list-loader.service';
import { ContentListData } from '../../../../_models/content-list-data';
import { AccountService } from '../../../../_services/account.service';
import { ListContentEditComponent } from "../../../admin/lists/list-content-edit/list-content-edit.component";

@Component({
  selector: 'app-media-caption-card-list',
  standalone: true,
  imports: [
    MediaCaptionCardComponent,
    ListContentEditComponent
],
  templateUrl: './media-caption-card-list.component.html',
  styleUrl: './media-caption-card-list.component.css'
})
export class MediaCaptionCardListComponent {
  @Input() listTag: string = '';
  private configLoader = inject(ComponentConfigLoaderService);
  accountService = inject(AccountService);
  apiContentLoader = inject(ComponentListLoaderService);
  config = signal<GenericConfig|null>(null);
  content = signal<ContentListData|null>(null);
  constructor(private router: Router) {}

  ngOnInit()
  { 
      this.configLoader.loadConfig('caption-card-list.json').subscribe((response) => {
        this.config.set(response[this.router.url]);

    })
    this.loadContent();
  }


  loadContent(){
    this.apiContentLoader.loadListContent(this.listTag).subscribe((response) => {
      this.content.set(response);
    })
  }


  test(){
    console.log(this.content());
  }

  mapCardListListConfig()
  {
    
  }
}
