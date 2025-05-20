'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from '../services/userApi'

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })
}
