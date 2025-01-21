import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { GenericResponse } from '../_models/generic-response';


@Injectable({
  providedIn: 'root'
})
export class ContactInquiryService{
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  

    createInquiry(model: any): Observable<GenericResponse>
    {
        return this.http.put<GenericResponse>(environment.apiUrl + "inquiry/create", model).pipe(
            map(response => {
                return this.readResponse(response);
            }
            )
        )
    }


    readResponse(data: any): GenericResponse
    {
        return {
            message: data.id,
            data: data.data
        };
    }
 
}
