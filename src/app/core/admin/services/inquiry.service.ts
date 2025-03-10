import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClient } from '@core/http/http-client';
import { HTTP_CONFIG } from '@core/http/http-client.config';
import {
  AdminInquiryListResponse,
  AdminInquiryDetailsResponse,
} from '@core/types/inquiry.types';

@Injectable({
  providedIn: 'root',
})
export class AdminInquiryService {
  constructor(private readonly http: AppHttpClient) {}

  getInquiryList(): Observable<AdminInquiryListResponse> {
    return this.http.get<AdminInquiryListResponse>(
      HTTP_CONFIG.endpoints.admin.inquiry.list
    );
  }

  getInquiryDetails(
    inquiryId: number
  ): Observable<AdminInquiryDetailsResponse> {
    return this.http.get<AdminInquiryDetailsResponse>(
      HTTP_CONFIG.endpoints.admin.inquiry.details(inquiryId)
    );
  }
}
