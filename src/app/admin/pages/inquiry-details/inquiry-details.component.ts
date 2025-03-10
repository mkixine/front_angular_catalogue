import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AdminInquiryService } from '@core/admin/services/inquiry.service';
import { AdminInquiryDetailsResponse } from '@core/types/inquiry.types';

@Component({
  selector: 'app-admin-inquiry-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="inquiry-details">
      <h1>お問い合わせ詳細</h1>
      <p>現在のパス: /admin/inquiry/details/{{ inquiryId }}</p>

      <div class="inquiry-details__content" *ngIf="inquiry">
        <dl class="inquiry-details__list">
          <dt>ID</dt>
          <dd>{{ inquiry.inquiry_bn_id }}</dd>

          <dt>名前</dt>
          <dd>{{ inquiry.name }}</dd>

          <dt>メールアドレス</dt>
          <dd>{{ inquiry.email }}</dd>

          <dt>ステータス</dt>
          <dd>{{ inquiry.status }}</dd>

          <dt>受付日時</dt>
          <dd>{{ inquiry.created_at | date : 'medium' }}</dd>

          <dt>メッセージ</dt>
          <dd class="inquiry-details__message">{{ inquiry.message }}</dd>
        </dl>

        <div class="inquiry-details__actions">
          <button type="button" routerLink="/admin/inquiry/list">
            一覧に戻る
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./inquiry-details.component.scss'],
})
export class AdminInquiryDetailsComponent implements OnInit {
  inquiryId: number | null = null;
  inquiry: AdminInquiryDetailsResponse['inquiry'] | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly inquiryService: AdminInquiryService
  ) {}

  ngOnInit(): void {
    const inquiryId = this.route.snapshot.paramMap.get('inquiry_bn_id');
    if (inquiryId) {
      this.inquiryId = +inquiryId;
      this.loadInquiry(this.inquiryId);
    }
  }

  private loadInquiry(inquiryId: number): void {
    this.inquiryService.getInquiryDetails(inquiryId).subscribe({
      next: (response) => {
        this.inquiry = response.inquiry;
      },
    });
  }
}
