import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminPropertyService } from '@core/admin/services/property.service';
import { AdminProperty } from '@core/types/property.types';

@Component({
  selector: 'app-admin-property-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="property-edit">
      <h1>{{ isNew ? '物件登録' : '物件編集' }}</h1>
      <p>
        現在のパス:
        {{
          isNew ? '/admin/property/edit' : '/admin/property/edit/' + topicsId
        }}
      </p>

      <form
        [formGroup]="propertyForm"
        (ngSubmit)="onSubmit()"
        class="property-edit__form"
      >
        <div class="form-group">
          <label for="title">タイトル</label>
          <input id="title" type="text" formControlName="title" />
        </div>

        <div class="form-group">
          <label for="description">説明</label>
          <textarea id="description" formControlName="description"></textarea>
        </div>

        <div class="form-group">
          <label for="price">価格</label>
          <input id="price" type="number" formControlName="price" />
        </div>

        <div class="form-group">
          <label for="location">場所</label>
          <input id="location" type="text" formControlName="location" />
        </div>

        <div class="form-group">
          <label for="status">ステータス</label>
          <select id="status" formControlName="status">
            <option value="active">公開</option>
            <option value="pending">承認待ち</option>
            <option value="rejected">却下</option>
          </select>
        </div>

        <div class="property-edit__actions">
          <button type="submit" [disabled]="propertyForm.invalid">保存</button>
          <button type="button" routerLink="/admin/property/list">
            キャンセル
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./property-edit.component.scss'],
})
export class AdminPropertyEditComponent implements OnInit {
  propertyForm: FormGroup;
  topicsId: number | null = null;
  isNew = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly propertyService: AdminPropertyService
  ) {
    this.propertyForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      status: ['pending', Validators.required],
    });
  }

  ngOnInit(): void {
    const topicsId = this.route.snapshot.paramMap.get('topics_id');
    if (topicsId) {
      this.topicsId = +topicsId;
      this.isNew = false;
      this.loadProperty(this.topicsId);
    }
  }

  private loadProperty(topicsId: number): void {
    this.propertyService.getPropertyDetails(topicsId).subscribe({
      next: (response) => {
        this.propertyForm.patchValue({
          title: response.property.title,
          description: response.property.description,
          price: response.property.price,
          location: response.property.location,
          status: response.property.status,
        });
      },
    });
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      const property: Partial<AdminProperty> = this.propertyForm.value;

      if (this.topicsId) {
        this.propertyService.updateProperty(this.topicsId, property).subscribe({
          next: () => this.navigateToList(),
        });
      }
    }
  }

  private navigateToList(): void {
    // TODO: Router.navigateを使用して一覧に戻る
  }
}
