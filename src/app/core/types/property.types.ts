// 公開用の物件型定義
export interface PublicProperty {
  topics_id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  created_at: string;
}

export interface PublicPropertyListResponse {
  properties: PublicProperty[];
  total: number;
}

export interface PublicPropertyDetailsResponse {
  property: PublicProperty;
}

// 管理用の物件型定義（公開用の型を拡張）
export interface AdminProperty extends PublicProperty {
  status: 'active' | 'pending' | 'rejected';
  updated_at: string;
}

export interface AdminPropertyListResponse {
  properties: AdminProperty[];
  total: number;
}

export interface AdminPropertyDetailsResponse {
  property: AdminProperty;
}
