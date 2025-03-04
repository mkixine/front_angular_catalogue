import { Routes } from '@angular/router';

export const routes: Routes = [
  // フロントエンド
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'property/:topics_id',
    loadComponent: () =>
      import('./pages/property-details/property-details.component').then(
        (m) => m.PropertyDetailsComponent
      ),
  },
  {
    path: 'inquiry',
    loadComponent: () =>
      import('./pages/inquiry/inquiry.component').then(
        (m) => m.InquiryComponent
      ),
  },
  // 管理画面
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
