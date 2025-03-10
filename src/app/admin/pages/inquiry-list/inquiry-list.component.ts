import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminInquiryService } from '@core/admin/services/inquiry.service';

@Component({
  selector: 'app-admin-inquiry-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="inquiry-list">
      <h1>お問い合わせ履歴一覧</h1>
      <p>現在のパス: /admin/inquiry/list</p>

      <div class="inquiry-list__content">
        <ng-container *ngIf="inquiries$ | async as response">
          <div class="inquiry-list__total">全{{ response.total }}件</div>

          <table class="inquiry-list__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>名前</th>
                <th>メールアドレス</th>
                <th>ステータス</th>
                <th>受付日時</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let inquiry of response.inquiries">
                <td>{{ inquiry.inquiry_bn_id }}</td>
                <td>{{ inquiry.name }}</td>
                <td>{{ inquiry.email }}</td>
                <td>{{ inquiry.status }}</td>
                <td>{{ inquiry.created_at | date : 'short' }}</td>
                <td>
                  <button
                    [routerLink]="[
                      '/admin/inquiry/details',
                      inquiry.inquiry_bn_id
                    ]"
                  >
                    詳細
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./inquiry-list.component.scss'],
})
export class AdminInquiryListComponent {
  inquiries$ = this.inquiryService.getInquiryList();

  constructor(private readonly inquiryService: AdminInquiryService) {}
}
