import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
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
            (m) => m.AdminPropertyListComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pages/property-edit/property-edit.component').then(
            (m) => m.AdminPropertyEditComponent
          ),
      },
      {
        path: 'edit/:topics_id',
        loadComponent: () =>
          import('./pages/property-edit/property-edit.component').then(
            (m) => m.AdminPropertyEditComponent
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
            (m) => m.AdminInquiryListComponent
          ),
      },
      {
        path: 'details/:inquiry_bn_id',
        loadComponent: () =>
          import('./pages/inquiry-details/inquiry-details.component').then(
            (m) => m.AdminInquiryDetailsComponent
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
            (m) => m.AdminMemberListComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pages/member-edit/member-edit.component').then(
            (m) => m.AdminMemberEditComponent
          ),
      },
      {
        path: 'edit/:member_id',
        loadComponent: () =>
          import('./pages/member-edit/member-edit.component').then(
            (m) => m.AdminMemberEditComponent
          ),
      },
    ],
  },
];
