import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/admin-top/admin-top.component').then(
        (m) => m.AdminTopComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/admin-login/admin-login.component').then(
        (m) => m.AdminLoginComponent
      ),
  },
  {
    path: 'property',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/property-list/property-list.component').then(
            (m) => m.PropertyListComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pages/property-edit/property-edit.component').then(
            (m) => m.PropertyEditComponent
          ),
      },
      {
        path: 'edit/:topics_id',
        loadComponent: () =>
          import('./pages/property-edit/property-edit.component').then(
            (m) => m.PropertyEditComponent
          ),
      },
    ],
  },
  {
    path: 'inquiry',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/inquiry-list/inquiry-list.component').then(
            (m) => m.InquiryListComponent
          ),
      },
      {
        path: 'details/:inquiry_bn_id',
        loadComponent: () =>
          import('./pages/inquiry-details/inquiry-details.component').then(
            (m) => m.InquiryDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'member',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/member-list/member-list.component').then(
            (m) => m.MemberListComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pages/member-edit/member-edit.component').then(
            (m) => m.MemberEditComponent
          ),
      },
      {
        path: 'edit/:member_id',
        loadComponent: () =>
          import('./pages/member-edit/member-edit.component').then(
            (m) => m.MemberEditComponent
          ),
      },
    ],
  },
];
