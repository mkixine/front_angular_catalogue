import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminMemberService } from '@core/admin/services/member.service';
import {
  AdminMemberCreateRequest,
  AdminMemberUpdateRequest,
} from '@core/types/member.types';

@Component({
  selector: 'app-admin-member-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="member-edit">
      <h1>{{ isNew ? 'ユーザー登録' : 'ユーザー編集' }}</h1>
      <p>
        現在のパス:
        {{ isNew ? '/admin/member/edit' : '/admin/member/edit/' + memberId }}
      </p>

      <form
        [formGroup]="memberForm"
        (ngSubmit)="onSubmit()"
        class="member-edit__form"
      >
        <div class="form-group">
          <label for="username">ユーザー名</label>
          <input id="username" type="text" formControlName="username" />
        </div>

        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input id="email" type="email" formControlName="email" />
        </div>

        <div class="form-group">
          <label for="password"
            >パスワード{{ !isNew ? '（変更する場合のみ）' : '' }}</label
          >
          <input id="password" type="password" formControlName="password" />
        </div>

        <div class="form-group">
          <label for="role">権限</label>
          <select id="role" formControlName="role">
            <option value="admin">管理者</option>
            <option value="editor">編集者</option>
            <option value="viewer">閲覧者</option>
          </select>
        </div>

        <div class="member-edit__actions">
          <button type="submit" [disabled]="memberForm.invalid">保存</button>
          <button type="button" routerLink="/admin/member/list">
            キャンセル
          </button>
          <button
            *ngIf="!isNew"
            type="button"
            class="delete"
            (click)="onDelete()"
          >
            削除
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./member-edit.component.scss'],
})
export class AdminMemberEditComponent implements OnInit {
  memberForm: FormGroup;
  memberId: number | null = null;
  isNew = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly memberService: AdminMemberService
  ) {
    this.memberForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', this.isNew ? Validators.required : []],
      role: ['viewer', Validators.required],
    });
  }

  ngOnInit(): void {
    const memberId = this.route.snapshot.paramMap.get('member_id');
    if (memberId) {
      this.memberId = +memberId;
      this.isNew = false;
      this.loadMember(this.memberId);
    }
  }

  private loadMember(memberId: number): void {
    this.memberService.getMemberDetails(memberId).subscribe({
      next: (response) => {
        this.memberForm.patchValue({
          username: response.member.username,
          email: response.member.email,
          role: response.member.role,
        });
      },
    });
  }

  onSubmit(): void {
    if (this.memberForm.valid) {
      const formValue = this.memberForm.value;

      if (this.isNew) {
        const request: AdminMemberCreateRequest = formValue;
        this.memberService.createMember(request).subscribe({
          next: () => this.navigateToList(),
        });
      } else if (this.memberId) {
        const request: AdminMemberUpdateRequest = {
          ...formValue,
          password: formValue.password || undefined,
        };
        this.memberService.updateMember(this.memberId, request).subscribe({
          next: () => this.navigateToList(),
        });
      }
    }
  }

  onDelete(): void {
    if (this.memberId && confirm('このユーザーを削除してもよろしいですか？')) {
      this.memberService.deleteMember(this.memberId).subscribe({
        next: () => this.navigateToList(),
      });
    }
  }

  private navigateToList(): void {
    this.router.navigate(['/admin/member/list']);
  }
}
