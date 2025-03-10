import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiClient } from '@core/api/api-client';
import { API_CONFIG } from '@core/config/api.config';
import { AdminLoginRequest, AdminLoginResponse } from '@core/types/api.types';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private readonly apiClient: HttpApiClient) {}

  login(credentials: AdminLoginRequest): Observable<AdminLoginResponse> {
    return this.apiClient.post<AdminLoginResponse>(
      API_CONFIG.endpoints.auth.login,
      credentials
    );
  }

  logout(): Observable<void> {
    return this.apiClient.post<void>(API_CONFIG.endpoints.auth.logout, {});
  }

  getProfile(): Observable<unknown> {
    return this.apiClient.get(API_CONFIG.endpoints.auth.profile);
  }
}
