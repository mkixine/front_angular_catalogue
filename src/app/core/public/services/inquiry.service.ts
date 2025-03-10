import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClient } from '@core/http/http-client';
import { HTTP_CONFIG } from '@core/http/http-client.config';
import {
  PublicInquiryRequest,
  PublicInquiryResponse,
} from '@core/types/inquiry.types';

@Injectable({
  providedIn: 'root',
})
export class PublicInquiryService {
  constructor(private readonly http: AppHttpClient) {}

  getInquiryForm(): Observable<unknown> {
    return this.http.get(HTTP_CONFIG.endpoints.public.inquiry.form);
  }

  submitInquiry(
    inquiry: PublicInquiryRequest
  ): Observable<PublicInquiryResponse> {
    return this.http.post<PublicInquiryResponse>(
      HTTP_CONFIG.endpoints.public.inquiry.submit,
      inquiry
    );
  }
}
