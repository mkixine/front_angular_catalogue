import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClient } from '@core/http/http-client';
import { HTTP_CONFIG } from '@core/http/http-client.config';
import {
  PublicPropertyListResponse,
  PublicPropertyDetailsResponse,
} from '@core/types/property.types';

@Injectable({
  providedIn: 'root',
})
export class PublicPropertyService {
  constructor(private readonly http: AppHttpClient) {}

  getPropertyList(): Observable<PublicPropertyListResponse> {
    return this.http.get<PublicPropertyListResponse>(
      HTTP_CONFIG.endpoints.public.property.list
    );
  }

  getPropertyDetails(
    topicsId: number
  ): Observable<PublicPropertyDetailsResponse> {
    return this.http.get<PublicPropertyDetailsResponse>(
      HTTP_CONFIG.endpoints.public.property.details(topicsId)
    );
  }
}
