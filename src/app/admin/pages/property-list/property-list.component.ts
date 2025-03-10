import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPropertyService } from '@core/admin/services/property.service';
import { AdminPropertyListResponse } from '@core/types/property.types';

@Component({
  selector: 'app-admin-property-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="property-list">
      <h1>物件一覧</h1>
      <p>現在のパス: /admin/property/list</p>

      <div class="property-list__actions">
        <button routerLink="/admin/property/edit">新規登録</button>
      </div>

      <div class="property-list__content">
        <ng-container *ngIf="properties$ | async as response">
          <div class="property-list__total">全{{ response.total }}件</div>

          <table class="property-list__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th>価格</th>
                <th>場所</th>
                <th>ステータス</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let property of response.properties">
                <td>{{ property.topics_id }}</td>
                <td>{{ property.title }}</td>
                <td>{{ property.price }}円</td>
                <td>{{ property.location }}</td>
                <td>{{ property.status }}</td>
                <td>
                  <button
                    [routerLink]="['/admin/property/edit', property.topics_id]"
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
  styleUrls: ['./property-list.component.scss'],
})
export class AdminPropertyListComponent {
  properties$ = this.propertyService.getPropertyList();

  constructor(private readonly propertyService: AdminPropertyService) {}
}
