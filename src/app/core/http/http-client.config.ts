export const HTTP_CONFIG = {
  baseUrl: 'https://dev-angular-catalogue.g.kuroco.app',
  endpoints: {
    public: {
      property: {
        list: '/rcms-api/1/properties',
        details: (id: number) => `/rcms-api/1/properties/${id}`,
      },
      inquiry: {
        form: '/rcms-api/1/inquiry/form',
        submit: '/rcms-api/1/inquiry/submit',
      },
    },
    admin: {
      auth: {
        login: '/rcms-api/1/admin/login',
        logout: '/rcms-api/1/admin/logout',
        profile: '/rcms-api/1/admin/profile',
      },
      property: {
        list: '/rcms-api/1/admin/properties',
        details: (id: number) => `/rcms-api/1/admin/properties/${id}`,
        update: (id: number) => `/rcms-api/1/admin/properties/${id}`,
        waitingList: '/rcms-api/1/admin/properties/waiting',
        waitingDetails: (id: number) =>
          `/rcms-api/1/admin/properties/waiting/${id}`,
        accept: (id: number) => `/rcms-api/1/admin/properties/${id}/accept`,
        reject: (id: number) => `/rcms-api/1/admin/properties/${id}/reject`,
      },
      inquiry: {
        list: '/rcms-api/1/admin/inquiries',
        details: (id: number) => `/rcms-api/1/admin/inquiries/${id}`,
      },
      member: {
        list: '/rcms-api/1/admin/members',
        details: (id: number) => `/rcms-api/1/admin/members/${id}`,
        create: '/rcms-api/1/admin/members',
        update: (id: number) => `/rcms-api/1/admin/members/${id}`,
        delete: (id: number) => `/rcms-api/1/admin/members/${id}`,
      },
    },
  },
  headers: {
    'Content-Type': 'application/json',
  },
} as const;
