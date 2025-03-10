import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClient } from '@core/http/http-client';
import { HTTP_CONFIG } from '@core/http/http-client.config';
import {
  AdminProperty,
  AdminPropertyListResponse,
  AdminPropertyDetailsResponse,
} from '@core/types/property.types';

@Injectable({
  providedIn: 'root',
})
export class AdminPropertyService {
  constructor(private readonly http: AppHttpClient) {}

  getPropertyList(): Observable<AdminPropertyListResponse> {
    return this.http.get<AdminPropertyListResponse>(
      HTTP_CONFIG.endpoints.admin.property.list
    );
  }

  getPropertyDetails(
    topicsId: number
  ): Observable<AdminPropertyDetailsResponse> {
    return this.http.get<AdminPropertyDetailsResponse>(
      HTTP_CONFIG.endpoints.admin.property.details(topicsId)
    );
  }

  updateProperty(
    topicsId: number,
    property: Partial<AdminProperty>
  ): Observable<AdminProperty> {
    return this.http.put<AdminProperty>(
      HTTP_CONFIG.endpoints.admin.property.update(topicsId),
      property
    );
  }

  getWaitingList(): Observable<AdminPropertyListResponse> {
    return this.http.get<AdminPropertyListResponse>(
      HTTP_CONFIG.endpoints.admin.property.waitingList
    );
  }

  getWaitingDetails(
    topicsId: number
  ): Observable<AdminPropertyDetailsResponse> {
    return this.http.get<AdminPropertyDetailsResponse>(
      HTTP_CONFIG.endpoints.admin.property.waitingDetails(topicsId)
    );
  }

  acceptProperty(topicsId: number): Observable<void> {
    return this.http.post<void>(
      HTTP_CONFIG.endpoints.admin.property.accept(topicsId),
      {}
    );
  }

  rejectProperty(topicsId: number): Observable<void> {
    return this.http.post<void>(
      HTTP_CONFIG.endpoints.admin.property.reject(topicsId),
      {}
    );
  }
}
