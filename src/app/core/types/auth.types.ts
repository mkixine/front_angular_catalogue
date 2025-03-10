export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  created_at: string;
  updated_at: string;
}
