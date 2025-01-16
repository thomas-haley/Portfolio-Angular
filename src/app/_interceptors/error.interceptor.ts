import { HttpEventType, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);

    return next(req).pipe(
        catchError(error => {
            if(error){
                switch (error.status) {
                    case 400:
                        if(error.error.errors){
                            const modalStateErrors = [];
                            for (const key in error.error.errors){
                                if(error.error.errors[key]){
                                    modalStateErrors.push(...error.error.errors[key])
                                }
                            }
                            for(var error of modalStateErrors){
                                // toaster.error(error);
                                console.error("Handle error with library")
                            }
                        } else {
                            // toaster.error(error.error, error.status);
                            console.error("Handle error with library")
                        }
                        
                        break;
                    case 401:
                        // toaster.error("Unauthorized", error.status);
                        console.error("Handle error with library")
                        break;
                    case 404:
                        router.navigateByUrl("404");
                        break;
                    case 500:
                        const navigationExtras: NavigationExtras = {state: {error: error.error}}
                        router.navigateByUrl("/server-error", navigationExtras);
                        break;
                    default:
                        // toaster.error("Something unexpected went wrong");
                        console.error("Handle error with library")
                        break;
                }
            }
            throw error;
        })
    )
}