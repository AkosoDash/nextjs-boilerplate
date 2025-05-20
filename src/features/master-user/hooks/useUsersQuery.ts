import { useQuery } from '@tanstack/react-query'
import { userApi } from '../services/userApi'

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    throwOnError(error, query) {
      console.error('Error fetching users:', error)
      throw error
    }
  })
}
