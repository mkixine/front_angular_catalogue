// 公開用のお問い合わせ型定義
export interface PublicInquiryRequest {
  name: string;
  email: string;
  message: string;
}

export interface PublicInquiryResponse {
  success: boolean;
  message?: string;
}

// 管理用のお問い合わせ型定義
export interface AdminInquiry {
  inquiry_bn_id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: 'new' | 'read' | 'replied';
}

export interface AdminInquiryListResponse {
  inquiries: AdminInquiry[];
  total: number;
}

export interface AdminInquiryDetailsResponse {
  inquiry: AdminInquiry;
}
