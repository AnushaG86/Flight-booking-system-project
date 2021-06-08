import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Book} from "../service/service"
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
function getWindow (): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  get nativeWindow (): any {
    return getWindow();
  }

  readonly REST_API: string = 'http://localhost:8086/api';
 
 // Http Header
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  Pay(data:any): Observable<any> {
    let API_URL = `${this.REST_API}`;
    return this.httpClient.post(API_URL, data)
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

  


