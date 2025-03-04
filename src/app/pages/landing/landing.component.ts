import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="landing">
      <h1>物件カタログ</h1>
      <!-- コンテンツは後で実装 -->
    </div>
  `,
  styles: [
    `
      .landing {
        padding: 2rem;
      }
    `,
  ],
})
export class LandingComponent {}
