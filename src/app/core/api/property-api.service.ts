import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiClient } from '@core/api/api-client';
import { API_CONFIG } from '@core/config/api.config';
import {
  AdminProperty,
  AdminPropertyListResponse,
  AdminPropertyDetailsResponse,
} from '@core/types/api.types';

@Injectable({
  providedIn: 'root',
})
export class PropertyApiService {
  constructor(private readonly apiClient: HttpApiClient) {}

  getPropertyList(): Observable<AdminPropertyListResponse> {
    return this.apiClient.get<AdminPropertyListResponse>(
      API_CONFIG.endpoints.property.list
    );
  }

  getPropertyDetails(
    topicsId: number
  ): Observable<AdminPropertyDetailsResponse> {
    return this.apiClient.get<AdminPropertyDetailsResponse>(
      API_CONFIG.endpoints.property.details(topicsId)
    );
  }

  updateProperty(
    topicsId: number,
    property: Partial<AdminProperty>
  ): Observable<AdminProperty> {
    return this.apiClient.put<AdminProperty>(
      API_CONFIG.endpoints.property.update(topicsId),
      property
    );
  }

  getWaitingList(): Observable<AdminPropertyListResponse> {
    return this.apiClient.get<AdminPropertyListResponse>(
      API_CONFIG.endpoints.property.waitingList
    );
  }

  getWaitingDetails(
    topicsId: number
  ): Observable<AdminPropertyDetailsResponse> {
    return this.apiClient.get<AdminPropertyDetailsResponse>(
      API_CONFIG.endpoints.property.waitingDetails(topicsId)
    );
  }

  acceptProperty(topicsId: number): Observable<void> {
    return this.apiClient.post<void>(
      API_CONFIG.endpoints.property.accept(topicsId),
      {}
    );
  }

  rejectProperty(topicsId: number): Observable<void> {
    return this.apiClient.post<void>(
      API_CONFIG.endpoints.property.reject(topicsId),
      {}
    );
  }
}
