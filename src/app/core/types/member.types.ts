export interface AdminMember {
  member_id: number;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
  updated_at: string;
}

export interface AdminMemberListResponse {
  members: AdminMember[];
  total: number;
}

export interface AdminMemberDetailsResponse {
  member: AdminMember;
}

export interface AdminMemberCreateRequest {
  username: string;
  email: string;
  password: string;
  role: AdminMember['role'];
}

export interface AdminMemberUpdateRequest {
  username?: string;
  email?: string;
  password?: string;
  role?: AdminMember['role'];
}
