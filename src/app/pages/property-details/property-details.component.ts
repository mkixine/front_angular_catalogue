import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="property-details">
      <h1>物件詳細</h1>
      <p>物件ID: {{ topicsId }}</p>
      <!-- コンテンツは後で実装 -->
    </div>
  `,
  styles: [
    `
      .property-details {
        padding: 2rem;
      }
    `,
  ],
})
export class PropertyDetailsComponent implements OnInit {
  topicsId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.topicsId = params.get('topics_id');
    });
  }
}
