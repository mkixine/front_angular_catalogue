import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="inquiry">
      <h1>お問い合わせ</h1>
      <!-- コンテンツは後で実装 -->
    </div>
  `,
  styles: [
    `
      .inquiry {
        padding: 2rem;
      }
    `,
  ],
})
export class InquiryComponent {}
