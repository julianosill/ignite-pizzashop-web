import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Name Test',
      email: 'test@a.com',
      phone: '1234567890',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
