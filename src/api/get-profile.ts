import { api } from '@/lib/axios'

interface GetProfileResponse {
  email: string
  id: string
  name: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
