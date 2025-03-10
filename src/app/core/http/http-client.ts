import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HTTP_CONFIG } from './http-client.config';

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppHttpClient {
  private readonly baseUrl = HTTP_CONFIG.baseUrl;
  private readonly headers = new HttpHeaders(HTTP_CONFIG.headers);

  constructor(private readonly http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    const apiError: ApiError = {
      message: error.error?.message || '予期せぬエラーが発生しました',
      code: error.error?.code || 'UNKNOWN_ERROR',
      status: error.status,
    };
    return throwError(() => apiError);
  }

  get<T>(path: string): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${path}`, { headers: this.headers })
      .pipe(catchError((error) => this.handleError(error)));
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}${path}`, body, { headers: this.headers })
      .pipe(catchError((error) => this.handleError(error)));
  }

  put<T>(path: string, body: unknown): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}${path}`, body, { headers: this.headers })
      .pipe(catchError((error) => this.handleError(error)));
  }

  delete<T>(path: string): Observable<T> {
    return this.http
      .delete<T>(`${this.baseUrl}${path}`, { headers: this.headers })
      .pipe(catchError((error) => this.handleError(error)));
  }
}
