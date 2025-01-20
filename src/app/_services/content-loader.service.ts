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
export class ContentLoaderService {
  private http = inject(HttpClient);

  loadContent(contentID: string) : Observable<ContentData>
  {
    return this.http.get<ContentData>(environment.apiUrl + "content/" + contentID).pipe(
      map(response => this.parseContentData(response))
    );
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


  getPossibleContent(): Observable<ContentData[]>
  {
    var contentData: ContentData[] = [];
    return this.http.get<ContentData[]>(environment.apiUrl + "content").pipe(
        map(response => {
            for(var content of response){
                contentData.push(this.parseContentData(content));
            }
            return contentData;
        })
    );
  }

}
