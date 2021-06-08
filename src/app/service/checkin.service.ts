import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  // Node/Express API
 REST_API: string = 'http://localhost:4300/api';
 
 // Http Header
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  GetPdf() {
    return this.httpClient.get(`${this.REST_API}/fetchpdf`);
  }

  Adddetail(data: any): Observable<any> {
    let API_URL = `${this.REST_API}/createpdf`;
    return this.httpClient.post(API_URL, data)
      .pipe(
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

