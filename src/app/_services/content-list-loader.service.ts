import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComponentConfig } from '../_models/component-config';
import { environment } from '../../environments/environment';
import { ContentListData } from '../_models/content-list-data';
import { ContentData } from '../_models/content-data';

@Injectable({
  providedIn: 'root'
})
export class ComponentListLoaderService {
  private http = inject(HttpClient);

  loadListContent(listTag: string) : Observable<ContentListData>
  {
    return this.http.get<ContentListData>(environment.apiUrl + "contentList/" + listTag).pipe(
      map(response => this.parseContentListData(response))
    );
  }

  removeListContent()
  {
    
  }

  private parseContentListData(data: any): ContentListData {
    // Ensure the structure of ContentListData
    return {
      id: data.id,
      tag: data.tag,
      content: data.content.map((item: any) => this.parseContentData(item))
    };
  }

  private parseContentData(data: any): ContentData {
    // Ensure the structure of ContentData
    return {
      id: data.id,
      visible: data.visible,
      title: data.title,
      description: data.description,
      media: data.media,
      mediaPosition: data.mediaPosition
    };
  }

}
