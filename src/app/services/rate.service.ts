import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IRate } from '../models/rate';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private errorService: ErrorService, private http: HttpClient) {}

  getData(): Observable<IRate[]> {
    return this.http.get<IRate[]>('https://api.monobank.ua/bank/currency').pipe(
      map((i) => i.slice(0, 3)),
      retry(2),
      catchError(this.errorHandler.bind(this))
    );
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
