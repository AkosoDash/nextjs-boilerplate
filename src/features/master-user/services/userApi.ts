import { Role, User, UserDataProps, UserFormData } from '../components/(table)/types'
import { api } from '@/libs'

// Mock API calls (replace with actual fetch/axios)
const { get, post, put, del } = api
export const userApi = {
  getUsers: async ({ page, limit }: { page?: number; limit?: number } = {}): Promise<UserDataProps> => {
    const res = await get(`/fake/users?page=${page}&limit=${limit}`)
    return { data: res?.data, totalData: res?.total }
  },
  getRoles: async (): Promise<Role[]> => {
    const res = await get('roles')
    return res?.data
  },
  deleteUser: async (id: string): Promise<void> => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' })
  },
  updateUser: async (id: string, data: UserFormData): Promise<User> => {
    const res = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
    return res.json()
  }
}
