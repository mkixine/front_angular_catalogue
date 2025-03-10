import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppHttpClient } from '@core/http/http-client';
import { HTTP_CONFIG } from '@core/http/http-client.config';
import {
  AdminMember,
  AdminMemberListResponse,
  AdminMemberDetailsResponse,
  AdminMemberCreateRequest,
  AdminMemberUpdateRequest,
} from '@core/types/member.types';

@Injectable({
  providedIn: 'root',
})
export class AdminMemberService {
  constructor(private readonly http: AppHttpClient) {}

  getMemberList(): Observable<AdminMemberListResponse> {
    return this.http.get<AdminMemberListResponse>(
      HTTP_CONFIG.endpoints.admin.member.list
    );
  }

  getMemberDetails(memberId: number): Observable<AdminMemberDetailsResponse> {
    return this.http.get<AdminMemberDetailsResponse>(
      HTTP_CONFIG.endpoints.admin.member.details(memberId)
    );
  }

  createMember(member: AdminMemberCreateRequest): Observable<AdminMember> {
    return this.http.post<AdminMember>(
      HTTP_CONFIG.endpoints.admin.member.create,
      member
    );
  }

  updateMember(
    memberId: number,
    member: AdminMemberUpdateRequest
  ): Observable<AdminMember> {
    return this.http.put<AdminMember>(
      HTTP_CONFIG.endpoints.admin.member.update(memberId),
      member
    );
  }

  deleteMember(memberId: number): Observable<void> {
    return this.http.delete<void>(
      HTTP_CONFIG.endpoints.admin.member.delete(memberId)
    );
  }
}
