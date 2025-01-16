import { HttpEventType, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';


export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    const accountService = inject(AccountService);
//   const toaster = inject(ToastrService);
//   toaster.clear();
  if(accountService.currentUser()){
    let clone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accountService.currentUser()?.token}`
      }
    });
    return next(clone);
  }
  return next(req);
}