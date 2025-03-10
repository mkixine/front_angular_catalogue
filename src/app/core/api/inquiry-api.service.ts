import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiClient } from '@core/api/api-client';
import { API_CONFIG } from '@core/config/api.config';
import {
  AdminInquiry,
  AdminInquiryListResponse,
  AdminInquiryDetailsResponse,
} from '@core/types/api.types';

@Injectable({
  providedIn: 'root',
})
export class InquiryApiService {
  constructor(private readonly apiClient: HttpApiClient) {}

  getInquiryForm(): Observable<unknown> {
    return this.apiClient.get(API_CONFIG.endpoints.inquiry.form);
  }

  submitInquiry(inquiry: Partial<AdminInquiry>): Observable<void> {
    return this.apiClient.post<void>(
      API_CONFIG.endpoints.inquiry.submit,
      inquiry
    );
  }

  getInquiryList(): Observable<AdminInquiryListResponse> {
    return this.apiClient.get<AdminInquiryListResponse>(
      API_CONFIG.endpoints.inquiry.list
    );
  }

  getInquiryDetails(
    inquiryId: number
  ): Observable<AdminInquiryDetailsResponse> {
    return this.apiClient.get<AdminInquiryDetailsResponse>(
      API_CONFIG.endpoints.inquiry.details(inquiryId)
    );
  }
}
