import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminMemberService } from '@core/admin/services/member.service';

@Component({
  selector: 'app-admin-member-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="member-list">
      <h1>ユーザー一覧</h1>
      <p>現在のパス: /admin/member/list</p>

      <div class="member-list__actions">
        <button routerLink="/admin/member/edit">新規登録</button>
      </div>

      <div class="member-list__content">
        <ng-container *ngIf="members$ | async as response">
          <div class="member-list__total">全{{ response.total }}件</div>

          <table class="member-list__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>ユーザー名</th>
                <th>メールアドレス</th>
                <th>権限</th>
                <th>登録日時</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let member of response.members">
                <td>{{ member.member_id }}</td>
                <td>{{ member.username }}</td>
                <td>{{ member.email }}</td>
                <td>{{ member.role }}</td>
                <td>{{ member.created_at | date : 'short' }}</td>
                <td>
                  <button
                    [routerLink]="['/admin/member/edit', member.member_id]"
                  >
                    編集
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./member-list.component.scss'],
})
export class AdminMemberListComponent {
  members$ = this.memberService.getMemberList();

  constructor(private readonly memberService: AdminMemberService) {}
}
