import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentConfig } from '../_models/component-config';

@Injectable({
  providedIn: 'root'
})
export class ComponentConfigLoaderService {
  private http = inject(HttpClient);
  private configBasePath = '_config/';

  loadConfig(configFile: string): Observable<ComponentConfig>
  {
    return this.http.get<ComponentConfig>(this.configBasePath + configFile)
  }

}
