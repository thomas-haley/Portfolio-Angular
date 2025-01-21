import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  private toastr = inject(ToastrService);

  private toasterTime = 3;


  showMessage(message: string)
  {
    this.clearMessage();
    this.toastr.show(message, undefined, {timeOut: this.toasterTime * 1000});
  }


  showSuccess(message: string)
  {
    this.clearMessage();
    this.toastr.success(message, undefined, {timeOut: this.toasterTime * 1000});
  }

  showError(message: string)
  {
    this.clearMessage();
    this.toastr.error(message, undefined, {timeOut: this.toasterTime * 1000});
  }
  
  clearMessage()
  {
    this.toastr.clear();
  }
}
