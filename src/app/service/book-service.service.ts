import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Book} from "../service/service"
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
 // Node/Express API
 readonly REST_API: string = 'http://localhost:5000/api';
 
 // Http Header
 httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  GetBooking() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  AddBook(data: Book): Observable<any> {
    let API_URL = `${this.REST_API}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  GetBook(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL)
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
